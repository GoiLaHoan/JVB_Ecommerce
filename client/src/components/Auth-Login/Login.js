import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../Layout";

const Login = (validate) => {
  const { status, updateStatus } = useContext(LoginContext);

  const checkAccountUser = localStorage.getItem("user");
  var accountUser;
  if (checkAccountUser) {
    accountUser = JSON.parse(checkAccountUser);
  } else {
    accountUser = [];
  }
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (status) {
      if (history.goBack() === history.push("/login")) {
        history.push("/");
      } else {
        history.goBack();
      }
      window.location.reload();
    }
  }, [status, history]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));

    if (accountUser.length === 0) {
      if (values.email === "" || values.password === "") {
        alert("Vui lòng đăng nhập tài khoản");
      } else {
        alert("Tài khoản không tồn tại");
      }
    }
    if (accountUser.length > 0) {
      var flag = false;
      for (let i = 0; i < accountUser.length; i++) {
        if (
          accountUser[i].email === values.email &&
          accountUser[i].password === values.password
        ) {
          flag = true;
          updateStatus();
          localStorage.setItem("profile", JSON.stringify(accountUser[i]));
          break;
        }
      }
      if (!flag) {
        for (let i = 0; i < accountUser.length; i++) {
          if (values.email === "" || values.password === "") {
            alert("Vui lòng đăng nhập tài khoản");
            break;
          } else {
            alert("Tài khoản không tồn tại");
            break;
          }
        }
      }
    }
  };

  return { handleChange, values, handleSubmit, errors };
};
export default Login;
