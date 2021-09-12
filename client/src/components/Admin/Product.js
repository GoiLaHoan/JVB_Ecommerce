import React, { useState, useEffect } from "react";
import ProductDataService from "../../services/ProductService";

const Product = (props) => {
  const initialProductState = {
    id: null,
    title: "",
    price: "",
    categorySlug: "",
    producer: "",
    slug: "",
    description: "",
    image: "",
  };
  const [currentProduct, setCurrentProduct] = useState(initialProductState);
  const [message, setMessage] = useState("");

  const getProduct = (id) => {
    ProductDataService.get(id)
      .then((response) => {
        setCurrentProduct(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProduct(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

 

  const updateProduct = () => {
    ProductDataService.update(currentProduct._id, currentProduct)
      .then((response) => {
        console.log(response.data);
        setMessage("Sản phẩm đã được cập nhật thành công!");
      })
      .catch((e) => {
        console.log(e);
      });
    
  };

  const deleteProduct = () => {
    if (window.confirm("Bạn có chắc chắn muốn xoá không?")) {
      ProductDataService.remove(currentProduct._id)
        .then((response) => {
          console.log(response.data);
          props.history.push("/product");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div>
      {currentProduct ? (
        <div className="edit-form">
          <h4>Product</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentProduct.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                name="price"
                value={currentProduct.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="categorySlug">CategorySlug</label>
              <input
                type="text"
                className="form-control"
                id="categorySlug"
                name="categorySlug"
                value={currentProduct.categorySlug}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="producer">Producer</label>
              <input
                type="text"
                className="form-control"
                id="producer"
                name="producer"
                value={currentProduct.producer}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="slug">Slug</label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                value={currentProduct.slug}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentProduct.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
                value={currentProduct.image}
                onChange={handleInputChange}
              />
            </div>
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteProduct}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateProduct}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Product...</p>
        </div>
      )}
    </div>
  );
};

export default Product;
