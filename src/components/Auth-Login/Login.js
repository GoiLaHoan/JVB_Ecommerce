import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "../Layout";

const Login = (validate) => {
  const accountUser = JSON.parse(localStorage.getItem("user"));
//   const status = false;
  const { status, updateStatus } = useContext(LoginContext);
  

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (status) {
      history.push("/");
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

    for (let i = 0; i < accountUser.length; i++) {
      if (
        accountUser[i].email === values.email &&
        accountUser[i].password === values.password
      ) {
        updateStatus()

        alert("Đăng nhập thành công");

        break;
      } else if (values.email === "" || values.password === "") {
        // alert("vui long nhap tk");
        break;
      } else {
        // alert("khong ton tai tk");
        break;
      }
    }
  };

  return { handleChange, values, handleSubmit, errors, status };
};
export default Login;
