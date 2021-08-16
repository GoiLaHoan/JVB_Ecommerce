import React, { useState, useCallback, useEffect, useRef } from "react";
import Helmet from "../components/Helmet";

import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";
import producer from "../assets/fake-data/category-producer";
import InfinityList from "../components/InfinityList";

const Catalog = () => {
  const initFilter = {
    category: [],
    producer: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "PRODUCER":
          setFilter({
            ...filter,
            producer: [...filter.producer, item.producer],
          });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "PRODUCER":
          const newProducer = filter.producer.filter(
            (e) => e !== item.producer
          );
          setFilter({ ...filter, producer: newProducer });
          break;
        default:
      }
    }
  };

  const clearFilter = () => setFilter(initFilter);

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    if (filter.producer.length > 0) {
      temp = temp.filter((e) => filter.producer.includes(e.producer));
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  const filterRef = useRef(null);

  const showHideFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Helmet title="Products">
      <div
        className="style_wapper"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div className="container">
          <div className="main">
            <div className="catalog">
              <div className="catalog__filter" ref={filterRef}>
                <div
                  className="catalog__filter__close"
                  onClick={() => showHideFilter()}
                >
                  <i className="bx bx-left-arrow-alt"></i>
                </div>

                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__title">
                    danh mục sản phẩm
                  </div>
                  <div className="catalog__filter__widget__content">
                    {category.map((item, index) => (
                      <div
                        key={index}
                        className="catalog__filter__widget__content__item"
                      >
                        <CheckBox
                          label={item.display}
                          onChange={(input) => {
                            return filterSelect(
                              "CATEGORY",
                              input.checked,
                              item
                            );
                          }}
                          checked={filter.category.includes(item.categorySlug)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__title">
                    Nhà sản xuất
                  </div>
                  <div className="catalog__filter__widget__content">
                    {producer.map((item, index) => (
                      <div
                        key={index}
                        className="catalog__filter__widget__content__item"
                      >
                        <CheckBox
                          label={item.display}
                          onChange={(input) => {
                            return filterSelect(
                              "PRODUCER",
                              input.checked,
                              item
                            );
                          }}
                          checked={filter.producer.includes(item.producer)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__content">
                    <Button size="sm" onClick={clearFilter}>
                      xóa bộ lọc
                    </Button>
                  </div>
                </div>
              </div>
              <div className="catalog__filter__toggle">
                <Button size="sm" onClick={() => showHideFilter()}>
                  Bộ Lọc
                </Button>
              </div>
              <div className="catalog__content">
                <InfinityList data={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
