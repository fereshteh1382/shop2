import {createStore,compose,applyMiddleware} from "redux";
import reducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";


export const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk)
    )
);

//Initialize
store.dispatch();

//subscribe
store.subscribe(() => console.log(store.getState()));

/*
const persistConfig = {
    key:"root",
    storage
}


const persistedReducer = persistReducer(persistConfig,reducer)

export default () => {
    let store = createStore(
        persistedReducer,
        applyMiddleware(thunk))
    let persistor = persistStore(store);
    return {store,persistor}
}
*/