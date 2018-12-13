import { combineReducers } from 'redux';
import headlinesReducer from './headlinesReducer';

const rootReducer = combineReducers({
  headlines: headlinesReducer
});
export default rootReducer;
