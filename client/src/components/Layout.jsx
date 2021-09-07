import React, { useState, useEffect } from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Routes from "../routes/Routes";
export const LoginContext = React.createContext();
export const LoginProvider = (props) => {
  const [status, setStatus] = useState(
    JSON.parse(localStorage.getItem("status"))
  );

  const updateStatus = () => {
    setStatus(!status);
  };

  useEffect(() => {
    localStorage.setItem("status", status);
  });

  return (
    <LoginContext.Provider value={{ status, updateStatus }}>
      {props.children}
    </LoginContext.Provider>
  );
};

const Layout = () => {
  return (
    <LoginProvider>
        <BrowserRouter>
          <Route
            render={(props) => (
              <div>
                <Header />
                <Routes />
                <Footer />
              </div>
            )}
          />
        </BrowserRouter>
    </LoginProvider>
  );
};

export default Layout;
