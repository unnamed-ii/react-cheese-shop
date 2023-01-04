import {createStore, combineReducers} from "redux";
import {clientsReducer} from "./syncReducers/clients";
import {basketReducer} from "./syncReducers/basket";
import {categoryFiltersReducer} from "./syncReducers/category-filters";

const rootReducer = combineReducers({
    clients: clientsReducer,
    basket: basketReducer,
    filters: categoryFiltersReducer,
})

export const store = createStore(rootReducer)