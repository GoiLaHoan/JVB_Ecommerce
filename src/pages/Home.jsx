import React from "react";

import Helmet from "../components/Helmet";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";

import productData from "../assets/fake-data/products";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* Slick Slide */}
      Slick Slide
      {/* best selling section */}
      <Section>
        <SectionTitle>Bán Chạy</SectionTitle>
        <SectionBody>
          <Grid col={5} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(5).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
          <div className="style_button">
            <button className="btn-view-all">Xem tất cả</button>
          </div>
        </SectionBody>
      </Section>
      {/* end best selling section */}
      {/* popular  */}
      <Section>
        <SectionTitle>Phổ biến</SectionTitle>
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
            <button className="btn-view-all">Xem tất cả</button>
          </div>
        </SectionBody>
      </Section>
      {/* end popular  */}
    </Helmet>
  );
};

export default Home;
