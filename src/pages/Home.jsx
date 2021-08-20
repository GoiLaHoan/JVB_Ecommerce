import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import productData from "../assets/fake-data/products";
import Slickslider from "../components/Slickslider";
import Doitac from "../components/Doitac";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Slick Slide */}
      <Slickslider />
      {/*End Slick Slide */}

      {/* best selling section */}
      <div className="container">
        <div className="main" style={{paddingTop: '0' }}>
          <Section>
            <SectionTitle>Bán Chạy</SectionTitle>
            <SectionBody>
              <Grid col={5} mdCol={2} smCol={1} gap={20}>
                {productData.getProducts(5).map((item, index) => (
                  <ProductCard
                    key={index}
                    img01={item.image01}
                    name={item.title}
                    price={Number(item.price)}
                    slug={item.slug}
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
                  img01={item.image01}
                  name={item.title}
                  price={Number(item.price)}
                  slug={item.slug}
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
            {/* <Grid col={6} mdCol={3} smCol={1} gap={0}> */}
            <Doitac />
            {/* </Grid> */}
          </SectionBody>
        </Section>
        {/* </div> */}
      </div>
      {/* End Doi tac */}
    </Helmet>
  );
};

export default Home;
