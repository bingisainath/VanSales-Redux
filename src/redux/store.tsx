import { combineReducers,configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './Reducer';

const rootReducer = combineReducers({
    PROFILE: counterSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
})