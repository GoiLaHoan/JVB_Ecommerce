import React, { useState, useEffect, useMemo, useRef } from "react";
import ProductDataService from "../../services/ProductService";
import { useTable, useSortBy } from "react-table";

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

  // const refreshList = () => {
  //   retrieveproducts();
  // };

  //   const removeAllproducts = () => {
  //     ProductDataService.removeAll()
  //       .then((response) => {
  //         console.log(response.data);
  //         refreshList();
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };

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
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "CategorySlug",
        accessor: "categorySlug",
      },
      {
        Header: "Producer",
        accessor: "producer",
      },
      {
        Header: "Slug",
        accessor: "slug",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Image",
        accessor: "image",
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <div>
              <span
                style={{ cursor: "pointer" }}
                onClick={() => openProduct(rowIdx)}
              >
                <i className="bx bx-edit h4 pe-auto"></i>
              </span>

              <span
                style={{ cursor: "pointer" }}
                onClick={() => deleteProduct(rowIdx)}
              >
                <i className="bx bxs-trash-alt h4 pe-auto"></i>
              </span>
            </div>
          );
        },
      },
    ],
    // eslint-disable-next-line
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data: products,
      },
      useSortBy
    );

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
      <div className="col-md-12 list">
        <table
          className="table table-striped table-bordered"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? <i className='bx bxs-up-arrow'></i>
                            : <i className='bx bxs-down-arrow' ></i>
                          : ""}
                      </span>
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* <div className="col-md-8">
        <button className="btn btn-sm btn-danger" onClick={removeAllproducts}>
          Remove All
        </button>
      </div> */}
    </div>
  );
};

export default ProductsList;
