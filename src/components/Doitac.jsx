import React from "react";

import img1 from "./../assets/images/doitac/1.png";
import img2 from "./../assets/images/doitac/2.png";
import img3 from "./../assets/images/doitac/3.png";
import img4 from "./../assets/images/doitac/4.png";
import img5 from "./../assets/images/doitac/5.png";
import img6 from "./../assets/images/doitac/6.png";
import Grid from "./Grid";

const Doitac = () => {
  return (
    <div style={{ display: "flex" }}>
      <Grid col={6} mdCol={3} smCol={2} gap={25}>
        <div>
          <img
            className="doitac_img"
            src={img1}
            alt=""
            style={{ height: "25vh", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            className="doitac_img"
            src={img2}
            alt=""
            style={{ height: "25vh", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            className="doitac_img"
            src={img3}
            alt=""
            style={{ height: "25vh", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            className="doitac_img"
            src={img4}
            alt=""
            style={{ height: "25vh", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            className="doitac_img"
            src={img5}
            alt=""
            style={{ height: "25vh", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            className="doitac_img"
            src={img6}
            alt=""
            style={{ height: "25vh", objectFit: "contain" }}
          />
        </div>
      </Grid>
    </div>
  );
};

export default Doitac;
