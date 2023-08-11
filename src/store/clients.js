const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

const defaultState = [
    {
        name: 'Vasya',
        id: Date.now(),
    },
]

export const clientsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload]

        case REMOVE_USER:
            return state.filter(clients => clients.id !== action.payload)

        default:
            return state
    }
}

export const addUserActionCreator = (payload) => ({type: ADD_USER, payload})
export const removeUserActionCreator = (payload) => ({type: REMOVE_USER, payload})