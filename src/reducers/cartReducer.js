import { ADD_PRODUCT_CART, GET_NUMBER_CART } from '../action/type';
import  products from '../assets/fake-data/products';

const initialState = {
    cartNumber: 0,
    // cartCost: 0,
    // productsCart: {...products}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT_CART:
            // let addQuantity = {...state.products[action.payload]};
            // console.log(addQuantity);
            return {
                cartNumber: state.cartNumber + 1 
            }
        case GET_NUMBER_CART:
            return {
                ...state
            }
        default:
            return state;
            
    }
}