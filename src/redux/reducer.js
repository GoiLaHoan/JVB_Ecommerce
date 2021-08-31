import { init } from "./states";
import * as actions from "./actions";
import storage from "../storage/storage";

export const reducer = (state = init, action) => {
  let newState = [];
  switch (action.type) {
    case actions.ADD_PRODUCT_TOCART: {
      let totalCart = 0;
      newState = {
        ...state,
        ProductsInCart: { ...state.ProductsInCart },
      };
      const check = newState.ProductsInCart.products.findIndex(
        (product) => product.code === action.payload.code
      );

      if (check === -1) {
        newState.ProductsInCart.products.push(action.payload);
      } else {
        newState.ProductsInCart.products[check] = {
          code: action.payload.code,
          quantity:
            newState.ProductsInCart.products[check].quantity +
            action.payload.quantity,
          price: action.payload.price,
        };
      }
      newState.ProductsInCart.products.map(
        (product) => (totalCart += product.quantity)
      );
      newState.ProductsInCart.totalCart = totalCart;
      storage.set(newState.ProductsInCart);
      return newState;
    }

    case actions.DELETE_PRODUCT_FROMCART: {
      let totalCart = 0;
      newState = { ...state, ProductsInCart: { ...state.ProductsInCart } };
      newState.ProductsInCart.products =
        newState.ProductsInCart.products.filter(
          (product) => product.code !== action.payload
        );

      newState.ProductsInCart.products.map(
        (product) => (totalCart += product.quantity)
      );
      newState.ProductsInCart.totalCart = totalCart;
      storage.set(newState.ProductsInCart);
      return newState;
    }

    case actions.UPDATE_PRODUCT_INCART: {
      newState = { ...state, ProductsInCart: { ...state.ProductsInCart } };
      let totalCart = 0;
      // eslint-disable-next-line
      newState.ProductsInCart.products.map((product) => {
        if (action.payload.productCode === product.code) {
          if (action.payload.type === "minus") {
            product.quantity -= 1;
          } else {
            product.quantity += 1;
          }
        }
      });
      newState.ProductsInCart.products.map(
        (product) => (totalCart += product.quantity)
      );
      newState.ProductsInCart.totalCart = totalCart;
      console.log(newState);
      storage.set(newState.ProductsInCart);
      return newState;
    }

    case actions.PAYMENT: {
      newState = {
        ProductsInCart: {
          products: [],
          totalCart: 0,
        },
      };
      storage.set(newState.ProductsInCart);
      return newState;
    }
    default:
      return state;
  }
};
