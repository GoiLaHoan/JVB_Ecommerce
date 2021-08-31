const CART_STORAGE_KEY = "cart";
// eslint-disable-next-line
export default {
  get() {
    return (
      JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || {
        products: [],
        totalCart: 0,
      }
    );
  },
  set(ProductsInCart) {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(ProductsInCart));
  },
};
