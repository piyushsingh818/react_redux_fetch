import { combineReducers } from 'redux';
import postReducer from './reducers'; // Import your postReducer here

const rootReducer = combineReducers({
  post: postReducer, // Make sure 'post' matches your reducer key
  // other reducers if any
});

export default rootReducer;