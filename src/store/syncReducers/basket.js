const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const CLEAR_BASKET = 'CLEAR_BASKET';

const initState = {
    id: '11299889182',
    products: [
        {title: 'Форма для твердого сыра 1 кг - 40 отверстий', price: '440', id: '3213123'},
        {title: 'Форма для твердого сыра 1 кг - 40 отверстий', price: '650', id: '1231231'},
    ]
}

export const basketReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload)
            }

        case CLEAR_BASKET:
            return {}

        default:
            return state
    }
}

export const addProductActionCreator = (payload) => ({type: ADD_PRODUCT, payload})
export const removeProductActionCreator = (payload) => ({type: REMOVE_PRODUCT, payload})
export const clearBasketActionCreator = (payload) => ({type: CLEAR_BASKET, payload})