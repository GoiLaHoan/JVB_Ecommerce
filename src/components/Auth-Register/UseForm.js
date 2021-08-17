import { useState, useEffect } from "react";
const UseForm = validate => {

    const check = localStorage.getItem("user");
    var dataUser;
    if (check) {
        dataUser = JSON.parse(check)
    } else {
        dataUser = [];
    }
    // console.log(dataUser.email);
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
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
        // console.log(values);
        if (dataUser.length === 0) {
            if (values.email === "" || values.username === "" || values.password === "" || values.password2 === "") {
                alert('vui long nhap thong tin dang ki');
               
            } else {
                dataUser.push(values);
                localStorage.setItem("user", JSON.stringify(dataUser));
                alert("dang ki thanh cong");
            }
        } else if (dataUser.length > 0) {
            for (let i = 0; i < dataUser.length; i++) {
                if (dataUser[i].email === values.email) {
                    alert('email da ton tai');

                    break;
                } else if (values.email === "" || values.username === "" || values.password === "" || values.password2 === "") {
                    alert('vui long nhap thong tin dang ki');
                    break;
                } else {
                    dataUser.push(values);
                    localStorage.setItem("user", JSON.stringify(dataUser));
                    alert("dang ki thanh cong");
                    break;
                }

            }
        }



    }

    return { handleChange, values, handleSubmit, errors };
};

export default UseForm;