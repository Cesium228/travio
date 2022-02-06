import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './userReducer';
import { applyMiddleware } from 'redux';
import fileReducer from './fileReducer';


const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))