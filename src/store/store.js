
import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer, { themeReducer } from './users/reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initThunk } from './users/thunks'


const rootReducer = combineReducers({
    user: userReducer,
    theme: themeReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => store.getState())

store.dispatch(initThunk())

export default store;