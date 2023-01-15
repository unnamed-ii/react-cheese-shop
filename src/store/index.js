import {createStore, combineReducers, applyMiddleware} from "redux";
import {clientsReducer} from "./syncReducers/clients";
import {basketReducer} from "./syncReducers/basket";
import {categoryFiltersReducer} from "./syncReducers/category-filters";
import {userReducer} from "./syncReducers/user";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    clients: clientsReducer,
    basket: basketReducer,
    filters: categoryFiltersReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))