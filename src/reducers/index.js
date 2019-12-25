import { combineReducers } from 'redux';
import userReducer from './user.js';
import counterReducer from './counter.js';

const allReducers = combineReducers({
	userReducer,
	counterReducer
})

export default allReducers;


