import {combineReducers, applyMiddleware, createStore} from 'redux';
import AppReducers from './reducers/AppReducers'

import thunk from 'redux-thunk';

let store =  createStore(
  combineReducers({
    appReducers: AppReducers
  }), {},
  applyMiddleware(thunk))

export default store