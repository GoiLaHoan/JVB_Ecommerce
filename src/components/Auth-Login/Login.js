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

  // if (status) {
  //   history.push("/");
  // }

  useEffect(() => {
    if (status) {
      history.goBack();
    }
  }, [status, history]);
  // const [isSubmitting, setIsSubmitting] = useState(false)
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
    // setIsSubmitting(true)

    if (accountUser.length === 0) {
      if (values.email === "" || values.password === "") {
        alert("vui long nhap tk");
      } else {
        alert("tk khong ton tai");
      }
    } else if (accountUser.length > 0) {
      for (let i = 0; i < accountUser.length; i++) {
        if (accountUser[i].email === values.email && accountUser[i].password === values.password) {
          updateStatus();
          break;
        } else if (values.email === "" || values.password === "") {
          alert("vui long nhap tk");
          break;
        } else {
          alert("khong ton tai tk");
          break;
        }
      }
    }
  };

  return { handleChange, values, handleSubmit, errors };
};
export default Login;
