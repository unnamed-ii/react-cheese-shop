const defaultState = [
    {
        name: 'Vasya',
        id: Date.now(),
    },
]

const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';

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