import {createStore, combineReducers} from "redux";
import {clientsReducer} from "./syncReducers/clients";
import {basketReducer} from "./syncReducers/basket";
import {categoryFiltersReducer} from "./syncReducers/category-filters";
import {isAuthorizedReducer} from "./syncReducers/is-auth";

const rootReducer = combineReducers({
    clients: clientsReducer,
    basket: basketReducer,
    filters: categoryFiltersReducer,
    isAuth: isAuthorizedReducer,
})

export const store = createStore(rootReducer)