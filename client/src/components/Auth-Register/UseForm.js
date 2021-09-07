import { useState } from "react";
const UseForm = (validate) => {
  const check = localStorage.getItem("user");
  var dataUser;
  if (check) {
    dataUser = JSON.parse(check);
  } else {
    dataUser = [];
  }

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
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
    if (dataUser.length === 0) {
      if (
        values.email === "" ||
        values.username === "" ||
        values.password === "" ||
        values.password2 === ""
      ) {
        alert("Vui lòng nhập thông tin tài khoản");
      } else {
        dataUser.push(values);
        localStorage.setItem("user", JSON.stringify(dataUser));
        alert("Đăng ký thành công");
      }
    } else if (dataUser.length > 0) {
      var flag = true;
      for (let i = 0; i < dataUser.length; i++) {
        if (dataUser[i].email === values.email) {
          alert("Email đã tồn tại");
          flag = false;
          break;
        }
        if (
          values.email === "" ||
          values.username === "" ||
          values.password === "" ||
          values.password2 === ""
        ) {
          alert("Vui lòng nhập thông tin");
          flag = false;
          break;
        }
      }

      if (flag) {
        dataUser.push(values);
        localStorage.setItem("user", JSON.stringify(dataUser));
        alert("Đăng ký thành công");
      }
    }
  };

  return { handleChange, values, handleSubmit, errors };
};

export default UseForm;
