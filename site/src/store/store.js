import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducer';

const initialState = {};
const middleware = [thunk];
let store = null;
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Only chrome can handle the redux dev tool
if (window.navigator.userAgent.includes('Chrome')) {
    store = createStore(
        persistedReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
} else {
    store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middleware)));
}

//store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middleware)));

const persistor = persistStore(store);
//persistor.purge();

export { store, persistor };
