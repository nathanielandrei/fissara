import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { listReducer } from '../reducers/list/index';
import { loginReducer } from '../reducers/login/index'

const rootReducer = combineReducers({
    listReducer,
    loginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export { store };