const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CLEAR_BASKET = 'CLEAR_BASKET';

export const basketReducer = (state = {}, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== product.payload)
            }

        case CLEAR_BASKET:
            return {}

        default:
            return state
    }
}