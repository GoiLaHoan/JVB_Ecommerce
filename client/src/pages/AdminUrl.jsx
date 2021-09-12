import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import AddProduct from "../components/Admin/AddProduct";
import ProductsList from "../components/Admin/ProductsList";
import Product from "../components/Admin/Product";

const AdminUrl = () => {
  const history = useHistory();

  const handleLogout = () => {
    if (window.confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
      localStorage.removeItem("status");
      localStorage.removeItem("profile");
      history.push("/login");
      window.location.reload();
    }
  };

  return (
    <div className="bootstrap-scope">
      <nav className="navbar navbar-expand navbar-dark bg-success">
        <a href="/product" className="navbar-brand text-light">
          Admin
        </a>
        <div className="navbar-nav mr-auto">
          <li className=" nav-item">
            <Link to={"/product"} className="nav-link text-light">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link text-light">
              Add
            </Link>
          </li>
        </div>

        <button className="btn text-light" onClick={handleLogout}>
          <i className="bx bx-log-out h4">Logout</i>
        </button>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/product"]} component={ProductsList} />
          <Route exact path="/add" component={AddProduct} />
          <Route path="/product/:id" component={Product} />
        </Switch>
      </div>
    </div>
  );
};

export default AdminUrl;
