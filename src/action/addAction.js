import { ADD_PRODUCT_CART } from './type';

export const addCart = (productName) => {
    return (dispatch) => {
        console.log('succeeded addCart');
        console.log('Product name: ' + productName);
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: productName

        })
    }
}