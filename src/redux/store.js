import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as AuthReducers from '../data/auth/reducers';

var createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

var reducers = Object.assign({},
    AuthReducers
);

reducers = combineReducers(reducers);

var store = createStoreWithMiddleware(reducers);

export default store;