import { combineReducers } from 'redux';
import storiesReducer from './storiesReducer';
import mashReducer from './mashReducer';

const rootReducer = combineReducers({
  stories: storiesReducer,
  mashes: mashReducer
});
export default rootReducer;
