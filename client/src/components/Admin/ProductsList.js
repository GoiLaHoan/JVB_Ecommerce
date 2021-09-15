import React, { useState, useEffect, useMemo, useRef } from "react";
import ProductDataService from "../../services/ProductService";
import { useTable, useSortBy, usePagination } from "react-table";
const ProductsList = (props) => {
  const [products, setProducts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const productsRef = useRef();

  productsRef.current = products;

  useEffect(() => {
    retrieveproducts();
  }, []);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveproducts = () => {
    ProductDataService.getAll()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };


  const findByTitle = () => {
    ProductDataService.findByTitle(searchTitle)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const openProduct = (rowIndex) => {
    const id = productsRef.current[rowIndex]._id;

    props.history.push("/product/" + id);
  };

  const deleteProduct = (rowIndex) => {
    if (window.confirm("Bạn có chắc chắn muốn xoá không?")) {
      const id = productsRef.current[rowIndex]._id;
      ProductDataService.remove(id)
        .then((response) => {
          props.history.push("/product");

          let newproducts = [...productsRef.current];
          newproducts.splice(rowIndex, 1);

          setProducts(newproducts);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
        khoangcach: "100%",
      },
      {
        Header: "Price",
        accessor: "price",
        khoangcach: "100%",
      },
      {
        Header: "CategorySlug",
        accessor: "categorySlug",
        khoangcach: "0%",
      },
      {
        Header: "Producer",
        accessor: "producer",
        khoangcach: "0%",
      },
      {
        Header: "Slug",
        accessor: "slug",
        khoangcach: "100%",
      },
      {
        Header: "Description",
        accessor: "description",
        khoangcach: "100%",
      },
      {
        Header: "Image",
        accessor: "image",
        khoangcach: "0%",
      },
      {
        Header: "Actions",
        accessor: "actions",
        khoangcach: "5%",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => openProduct(rowIdx)}
              >
                <i className="bx bx-edit h4 pe-auto text-success"></i>
              </span>

              <span
                style={{ cursor: "pointer" }}
                onClick={() => deleteProduct(rowIdx)}
              >
                <i className="bx bxs-trash-alt h4 pe-auto text-danger"></i>
              </span>
            </div>
          );
        },
      },
    ],
    // eslint-disable-next-line
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    pageOptions,
    state,
    setPageSize,
    prepareRow,
  } = useTable(
    {
      columns,
      data: products,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize } = state;

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="pagination float-right mb-3" style={{ margin: "auto" }}>
          <button
            className="page-link "
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>{" "}
          <button
            className="page-link"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>{" "}
          <span className="page-link">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize} className="page-link">
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      width: column.render("khoangcach"),
                      background: "#28A745",
                      color: "#fff",
                      textAlign: "center",
                      fontSize: "1.1rem"
                    }}
                  >
                    {column.render("Header")}
                    <span>
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="bx bxs-up-arrow"></i>
                          ) : (
                            <i className="bx bxs-down-arrow"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          maxWidth: "300px",
                          minWidth: "130px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          textAlign: "center",
                          fontFamily: "Glory",
                          fontSize: "1.2rem",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;
