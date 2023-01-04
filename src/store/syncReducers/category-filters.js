const ADD_FILTER = 'ADD_FILTER';
const REMOVE_FILTER = 'REMOVE_FILTER';
const CLEAR_FILTERS = 'CLEAR_FILTERS';

const initState = {
    price: [
        "От дорогих к дешевым",
        "От дешёвых к дорогим"
    ],
    kinds: [
        "Закваски для йогурта",
        "Закваски для творога",
        "Закваска для ряженки",
        "Закваски для йогурта",
        "Закваски Скваска",
        "Закваски Каприна",
        "Закваски для кефира"
    ],
    manufacturer: [
        "Производитель 1",
        "Производитель 2",
        "Производитель 3",
        "Производитель 4",
        "Производитель 5",
        "Производитель 6",
        "Производитель 7"
    ],
    addedFilters: []
}

export const categoryFiltersReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return {...state, addedFilters: [...state, action.payload]}

        case REMOVE_FILTER:
            return {
                ...state,
                addedFilters: []
            }

        case CLEAR_FILTERS:
            return {...state, addedFilters: []}

        default:
            return state
    }
}

export const addFilterActionCreator = (payload) => ({type: ADD_FILTER, payload})
export const removeFilterActionCreator = (payload) => ({type: REMOVE_FILTER, payload})
export const clearFiltersActionCreator = (payload) => ({type: CLEAR_FILTERS})