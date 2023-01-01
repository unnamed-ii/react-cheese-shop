import {createStore, combineReducers} from "redux";
import {clientsReducer} from "./syncReducers/clients";
import {basketReducer} from "./syncReducers/basket";

const rootReducer = combineReducers({
    clients: clientsReducer,
    basket: basketReducer,
})

export const store = createStore(rootReducer)