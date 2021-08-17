import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = validate => {
    const accountUser = JSON.parse(localStorage.getItem("user"));
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values))
        setIsSubmitting(true)

        for (let i = 0; i < accountUser.length; i++) {
            if (accountUser[i].email === values.email && accountUser[i].password === values.password) {
                alert('dang nhap thanh cong');
                
                break;
            } else if ((values.email === "" || values.password === "")) {
                alert("vui long nhap tk");
                break;
            } else {
                alert("khong ton tai tk");
                break;
            }

        }


    }
    return { handleChange, values, handleSubmit, errors };
}
export default Login;
