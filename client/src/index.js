import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AdminUrl from "./pages/AdminUrl";
const accountAdmin = JSON.parse(localStorage.getItem("profile"));
if (
  accountAdmin &&
  accountAdmin.email !== null &&
  accountAdmin.email === "admin@gmail.com"
) {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
          <AdminUrl />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Layout />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}
