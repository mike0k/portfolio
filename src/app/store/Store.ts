import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootReducer from './Reducers';

const Store = configureStore({
    reducer: combineReducers(rootReducer),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export default Store;
