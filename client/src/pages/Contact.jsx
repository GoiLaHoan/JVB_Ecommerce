import React from "react";

import Helmet from "../components/Helmet";

const Contact = () => {
  return (
    <Helmet title="Contact">
      <div className="container">
        <div className="main" style={{ display: "flex" }}>
          <div style={{ margin: "auto" }}>
            <h1 style={{ textAlign:"center"}}>Liên Hệ</h1>
            {/* eslint-disable-next-line */}
            <a href="https://www.facebook.com/GoiLaHoan/" target="_blank">
              <div>https://www.facebook.com/GoiLaHoan/</div>
            </a>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Contact;
