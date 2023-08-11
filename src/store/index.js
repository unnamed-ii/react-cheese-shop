import {createStore, combineReducers, applyMiddleware} from "redux";
import {clientsReducer} from "./clients";
import {basketReducer} from "./basket";
import {categoryFiltersReducer} from "./category-filters";
import {userReducer} from "./user";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    clients: clientsReducer,
    basket: basketReducer,
    filters: categoryFiltersReducer,
    user: userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))