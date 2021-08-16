import React, { useState, useCallback, useEffect } from "react";
import Helmet from "../components/Helmet";

import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";

import productData from "../assets/fake-data/products";
import category from "../assets/fake-data/category";

const Products = () => {
  const initFilter = {
    category: [],
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
        default:
      }
    }
  };

  // const clearFilter = () => setFilter(initFilter)

  const updateProducts = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug));
    }

    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProducts();
  }, [updateProducts]);

  return (
    <Helmet title="Products">
      {console.log(filter)}
      <div
        className="style_wapper"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div className="container">
          <div className="main">
            <div className="catalog">
              <div className="catalog__filter">
                <div className="catalog__filter__close">
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
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="catalog__filter__widget">
                  <div className="catalog__filter__widget__content">
                    <Button size="sm">xóa bộ lọc</Button>
                  </div>
                </div>
              </div>
              <div className="catalog__content">
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                  {products.map((item, index) => (
                    <ProductCard
                      key={index}
                      img01={item.image01}
                      name={item.title}
                      price={Number(item.price)}
                      slug={item.slug}
                    />
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Products;
