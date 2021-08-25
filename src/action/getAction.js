import { GET_NUMBER_CART} from './type';

export const getNumbers = () => {
    return (dispatch) => {
        console.log('getting all cartNumber');

        dispatch({
            type: GET_NUMBER_CART
        })
    }
}