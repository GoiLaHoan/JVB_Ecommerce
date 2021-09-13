import axios from "axios";

export default axios.create({
  baseURL: "https://jvb-ecommerce.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    
  },
});
