import React from "react";
import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import ProductView from "../components/ProductView";

import productData from "../assets/fake-data/products";
import { Link } from "react-router-dom";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);
  console.log(props.match.params.slug);

  const relatedProducts = productData.getProducts(6);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
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
                    img01={item.image01}
                    img02={item.image02}
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
    </Helmet>
  );
};

export default Product;
