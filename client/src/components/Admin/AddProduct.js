import React, { useState } from "react";
import productDataService from "../../services/ProductService";

const AddProduct = () => {
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
  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveproduct = () => {
    var data = {
      title: product.title,
      price: product.price,
      categorySlug: product.categorySlug,
      producer: product.producer,
      slug: product.slug,
      description: product.description,
      image: product.image
    };

    productDataService.create(data)
      .then(response => {
        setProduct({
          id: response.data.id,
          title: response.data.title,
          price: response.data.price,
          categorySlug: response.data.categorySlug,
          producer: response.data.producer,
          slug: response.data.slug,
          description: response.data.description,
          image: response.data.image,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newproduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Thêm sản phẩm thành công</h4>
          <button className="btn btn-success" onClick={newproduct}>
            Thêm tiếp
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={product.title || ""}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={product.price || ""}
              onChange={handleInputChange}
              name="price"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">categorySlug</label>
            <input
              type="text"
              className="form-control"
              id="categorySlug"
              required
              value={product.categorySlug || ""}
              onChange={handleInputChange}
              name="categorySlug"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">producer</label>
            <input
              type="text"
              className="form-control"
              id="producer"
              required
              value={product.producer || ""}
              onChange={handleInputChange}
              name="producer"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              required
              value={product.slug || ""}
              onChange={handleInputChange}
              name="slug"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={product.description || ""}
              onChange={handleInputChange}
              name="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              required
              value={product.image || ""}
              onChange={handleInputChange}
              name="image"
            />
          </div>
          <button className="btn btn-success" onClick={saveproduct}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;