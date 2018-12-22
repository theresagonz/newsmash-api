import { combineReducers } from 'redux';
import mixReducer from './mixReducer';
import mashReducer from './mashReducer';

const rootReducer = combineReducers({
  mix: mixReducer,
  mashes: mashReducer
});
export default rootReducer;
