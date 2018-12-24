import { combineReducers } from 'redux';
import mixReducer from './mixReducer';
import mashReducer from './mashReducer';

const rootReducer = combineReducers({
  mix: mixReducer,
  mash: mashReducer
});
export default rootReducer;
