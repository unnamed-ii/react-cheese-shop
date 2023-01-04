const ADD_FILTER = 'ADD_FILTER';
const REMOVE_FILTER = 'REMOVE_FILTER';
const RESET_FILTERS = 'RESET_FILTERS';
const TOGGLE_FILTERS = 'TOGGLE_FILTERS';

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
    onlyAvailable: false,
    showFilters: false,
    addedFilters: ['some filter 1', 'some filter 2', 'some filter 3']
}

export const categoryFiltersReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_FILTER:
            return {...state, addedFilters: [...state, action.payload]}

        case REMOVE_FILTER:
            return {
                ...state,
                addedFilters: state.addedFilters.filter((filter, idx) => idx !== action.payload)
            }

        case TOGGLE_FILTERS:
            return {
                ...state,
                showFilters: !state.showFilters
            }

        case RESET_FILTERS:
            return {...state, addedFilters: []}

        default:
            return state
    }
}

export const addFilterActionCreator = (payload) => ({type: ADD_FILTER, payload})
export const removeFilterActionCreator = (payload) => ({type: REMOVE_FILTER, payload})
export const toggleFiltersActionCreator = () => ({type: TOGGLE_FILTERS})
export const resetFiltersActionCreator = () => ({type: RESET_FILTERS})