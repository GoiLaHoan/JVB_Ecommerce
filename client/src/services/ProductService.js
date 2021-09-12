import http from "../http-common";

const getAll = () => {
  return http.get("/product");
};

const get = id => {
  return http.get(`/product/${id}`);
};

const findByTitle = value => {
  return http.get(`/product/?search=${value}`);
};

const create = data => {
  return http.post("/product/createProduct", data);
};

const update = (id, data) => {
  return http.put(`/product/${id}`, data);
};

const remove = id => {
  return http.delete(`/product/${id}`);
};


// eslint-disable-next-line
export default {
  getAll,
  get,
  create,
  update,
  remove,
  findByTitle,
};