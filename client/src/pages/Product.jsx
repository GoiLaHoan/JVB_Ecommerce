import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";
import axios from 'axios'
import productData from "../assets/info-data/products";
import { Link } from "react-router-dom";
const Product = (props) => {

  // eslint-disable-next-line
  const [productsData, setproductsData] = useState([]);
  const url = "http://localhost:9000/api/product";
  useEffect(() => {
    async function fetchData() {
      await axios
        .get(url)
        .then((response) => {
          setproductsData(response.data);
        })
        .catch((error) => console.log(error));
    }
    fetchData();
    // eslint-disable-next-line
  }, []);

  const product = productData.getProductBySlug(props.match.params.slug);
  console.log(product);
  const relatedProducts = productData.getProducts(6);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <>
      {product === undefined ? (
        <Helmet title={"Loading"}>
          <div className="container">
            <div className="main main_product">Loading...</div>
          </div>
        </Helmet>
      ) : (
        <Helmet title={product.title}>
          <div className="container">
            <div className="main main_product">
              <Section>
                <SectionBody>
                  <ProductView product={product} />
                </SectionBody>
              </Section>
              <Section>
                <SectionTitle>Khám phá thêm</SectionTitle>
                <SectionBody>
                  <Grid col={6} mdCol={2} smCol={1} gap={20}>
                    {relatedProducts.map((item, index) => (
                      <ProductCard
                        key={index}
                        img01={item.image}
                        name={item.title}
                        price={Number(item.price)}
                        slug={item.slug}
                        _id={item._id}
                      />
                    ))}
                  </Grid>
                  <div className="style_button">
                    <Link to="/products">
                      <button className="btn-view-all">Xem tất cả</button>
                    </Link>
                  </div>
                </SectionBody>
              </Section>
            </div>
          </div>
        </Helmet>
      )}
    </>
  );
};

export default Product;
