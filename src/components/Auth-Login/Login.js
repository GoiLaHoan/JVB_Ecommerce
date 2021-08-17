import { useState } from 'react'

const Login = validate => {
    const checkAccountUser = localStorage.getItem("user");
    var accountUser;
    if (checkAccountUser) {
        accountUser = JSON.parse(checkAccountUser)
    } else {
        accountUser = [];
    }
    const [values, setValues] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({})
    const [setIsSubmitting] = useState(false)
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
        if(accountUser.length === 0) {
            console.log("chua co data");
        } else if (accountUser.length > 0) {
            for (let i = 0; i < accountUser.length; i++) {
                if (accountUser[i].email === values.email && accountUser[i].password === values.password) {
                    alert('dang nhap thanh cong');
                    // return <Link to={'/products'} />
                } else if ((values.email === "" || values.password === "")) {
                    alert("vui long nhap tk");
                    break;
                } else {
                    alert("khong ton tai tk");
                    break;
                }
    
            }
        }
        


    }
    return { handleChange, values, handleSubmit, errors };
}
export default Login;
