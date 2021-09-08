import React, { useEffect, useContext } from "react";
import { LoginContext } from "../components/Layout";
import Helmet from "../components/Helmet";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const { updateStatus } = useContext(LoginContext);
  const history = useHistory();
  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
      updateStatus();
      localStorage.removeItem("profile");
      history.push('/')
    }
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0);

  // }, [handleLogout])
  return (
    <Helmet title="Contact">
      <div className="container">
        <div className="main">
          <button onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>
    </Helmet>
  );
};

export default Admin;
