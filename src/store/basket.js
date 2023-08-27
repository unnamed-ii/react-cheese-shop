const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CLEAR_BASKET = 'CLEAR_BASKET';
const SET_PRODUCT_NUMBER = 'SET_PRODUCT_NUMBER';

const initState = {
    products: [],
    sum: 0
}

export const basketReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT: {
            const addingProductId = action.payload.id;
            const isProductAlreadyInBasket = state.products.filter(product => product.id === addingProductId).length;
            if (isProductAlreadyInBasket) {
                alert("Товар уже в корзине");
                return state;
            } else {
                const updatedProducts = [...state.products, action.payload];
                return {
                    ...state,
                    products: updatedProducts,
                    sum: updatedProducts.reduce((sum, product) => sum + (product.price * product.amount), 0)
                }
            }
        }

        case SET_PRODUCT_NUMBER: {
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        amount: action.payload.amount
                    }
                }
                return product;
            });
            return {
                ...state,
                products: updatedProducts,
                sum: updatedProducts.reduce((sum, product) => sum + (product.price * product.amount), 0)
            }
        }

        case REMOVE_PRODUCT: {
            const updatedProducts = state.products.filter(product => product.id !== action.payload);
            return {
                ...state,
                products: updatedProducts,
                sum: updatedProducts.reduce((sum, product) => sum + product.price, 0)
            }
        }

        case CLEAR_BASKET:
            return {}

        default:
            return state
    }
}

export const addProductActionCreator = (payload) => ({type: ADD_PRODUCT, payload});
export const setProductNumberActionCreator = (payload) => ({type: SET_PRODUCT_NUMBER, payload});
export const removeProductActionCreator = (payload) => ({type: REMOVE_PRODUCT, payload});
export const clearBasketActionCreator = () => ({type: CLEAR_BASKET});