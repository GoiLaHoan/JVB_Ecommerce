import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import productData from "../assets/info-data/products";
import Slickslider from "../components/Slickslider";
import Doitac from "../components/Doitac";

const Home = () => {
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

  return (
    <Helmet title="Home">
      {/* Slick Slide */}
      <Slickslider />
      {/*End Slick Slide */}

      {/* best selling section */}
      <div className="container">
        <div className="main main__home">
          <Section>
            <SectionTitle>Bán Chạy</SectionTitle>
            <SectionBody>
              <Grid col={5} mdCol={2} smCol={1} gap={20}>
                {productData.getProducts(5).map((item, index) => (
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
      {/* end best selling section */}

      {/* popular  */}
      <Section>
        <div
          style={{
            backgroundImage: "linear-gradient( 90deg ,#00b46e,#17a2b8)",
            padding: "30px",
          }}
        >
          <SectionTitle>
            <p style={{ color: "white" }}>Phổ biến</p>
          </SectionTitle>
          <SectionBody>
            <Grid col={5} mdCol={2} smCol={1} gap={20}>
              {productData.getProducts(10).map((item, index) => (
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
                <button className="btn-view-all btn-popular">Xem tất cả</button>
              </Link>
            </div>
          </SectionBody>
        </div>
      </Section>
      {/* end popular  */}

      {/* Doi tac */}
      <div className="container">
        {/* <div className="main"> */}
        <Section>
          <SectionTitle>Đối tác của thuocsi.vn</SectionTitle>
          <SectionBody>
            <Doitac />
          </SectionBody>
        </Section>
        {/* </div> */}
      </div>
      {/* End Doi tac */}
    </Helmet>
  );
};

export default Home;
