import productImage from '../images/basket/item-1.png';

const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CLEAR_BASKET = 'CLEAR_BASKET';

const initState = {
    id: '11299889182',
    products: [
        {title: 'Форма для твердого сыра 1 кг - 40 отверстий', price: 440, id: '3213123', amount: 1, image: productImage},
        {title: 'Форма для твердого сыра 1 кг - 40 отверстий', price: 650, id: '1231231', amount: 1, image: productImage},
    ],
    sum: 1090
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
export const removeProductActionCreator = (payload) => ({type: REMOVE_PRODUCT, payload});
export const clearBasketActionCreator = (payload) => ({type: CLEAR_BASKET});