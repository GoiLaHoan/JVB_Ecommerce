import{ useState } from 'react'

const ForgotPassword = validate => {
    const checkEmail = JSON.parse(localStorage.getItem("user"));
    const [values, setValues] = useState({
        password: '',
        password2: ''
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
        for (let i = 0; i < checkEmail.length; i++) {
            if (checkEmail[i].email === values.email) {
                alert("Nhap mk moi cua ban");
                break;
            } else if (values.email === ""){
                alert("nhap email");
                break;
            } else {
                alert("email khong ton tai");
                break;
            }
            
        }
    }
    return { handleChange, values, handleSubmit, errors };
}
export default ForgotPassword;
