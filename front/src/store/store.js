import reducer from './reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(reducer, compose(applyMiddleware(thunkMiddleware, createLogger())));