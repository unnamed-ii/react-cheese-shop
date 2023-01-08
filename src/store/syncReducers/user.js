const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

const initState = {
    isAuth: false,
    data: {
        name: '',
        email: '',
        // password: '',
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


            // const querySnapshot = await getDocs(collection(database, "cities"));
            // querySnapshot.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            // });

            let responseFromServer = false;
            if (responseFromServer) {
                return {...state, isAuth: true}
            }
            return state;
        }

        case LOG_OUT:
            return {...state, isAuth: false}

        default:
            return state
    }
}

const logInActionCreator = (payload) => ({type: LOG_IN, payload});
const logOutActionCreator = () => ({type: LOG_OUT});