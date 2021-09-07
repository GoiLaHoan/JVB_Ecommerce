export const ADD_PRODUCT_TOCART = "ADD_PRODUCT_TOCART";
export const DELETE_PRODUCT_FROMCART = "DELETE_PRODUCT_FROMCART";
export const UPDATE_PRODUCT_INCART = "UPDATE_PRODUCT_INCART";
export const PAYMENT = "PAYMENT";

export const addProductToCart = (product) => {
  return {
    type: ADD_PRODUCT_TOCART,
    payload: product,
  };
};

export const deleteProductFromcart = (productID) => {
  return {
    type: DELETE_PRODUCT_FROMCART,
    payload: productID,
  };
};

export const updateProductIncart = (productID, type) => {
  return {
    type: UPDATE_PRODUCT_INCART,
    payload: {
      productID: productID,
      type: type,
    },
  };
};

export const checkout = (product) => {
  return {
    type: PAYMENT,
    payload: product,
  };
};