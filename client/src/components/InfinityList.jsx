import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Grid from "./Grid";
import ProductCard from "./ProductCard";

const InfinityList = (props) => {
  const listRef = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
    }
  }, [props.data]);

  return (
    <div ref={listRef}>
      <Grid col={4} mdCol={2} smCol={1} gap={20}>
        {data.length ? (
          data.map((item, index) => (
            <ProductCard
              key={index}
              img01={item.image}
              name={item.title}
              price={Number(item.price)}
              slug={item.slug}
              _id={item._id}
            />
          ))
        ) : (
          <>
            <p style={{ fontSize: "18px" }}>Hiện không có sản phẩm cần tìm</p>
          </>
        )}
      </Grid>
    </div>
  );
};

InfinityList.propTypes = {
  data: PropTypes.array.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default InfinityList;
