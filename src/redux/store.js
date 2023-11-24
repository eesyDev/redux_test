import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import counterReducer from './reducers';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
}, composeWithDevTools());

export default store;