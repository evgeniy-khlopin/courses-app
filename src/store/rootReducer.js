import { combineReducers } from 'redux';
import { coursesReducer } from './courses/reducer.js';
import { authorsReducer } from './authors/reducer.js';
import { userReducer } from './user/reducer.js';

const rootReducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

export default rootReducer;
