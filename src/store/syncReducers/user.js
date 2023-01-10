const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const SIGN_UP = 'SIGN_UP';

const initState = {
    isAuth: false,
    userData: {
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
        coupons: [],
        favourites: [],
        orders: [],
    },
    id: ''
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_IN: {
            if (action.payload) {
                return action.payload
            }
            return state;
        }

        case LOG_OUT:
            return initState;

        case SIGN_UP:
            if (action.payload) {
                return action.payload
            }
            return state;

        default:
            return state
    }
}

export const logInActionCreator = (payload) => ({type: LOG_IN, payload});
export const signUpActionCreator = (payload) => ({type: SIGN_UP, payload});
export const logOutActionCreator = () => ({type: LOG_OUT});