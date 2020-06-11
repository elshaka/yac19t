import { combineReducers } from 'redux';
import listReducer from './listReducer';
import itemReducer from './itemReducer';

const rootReducer = combineReducers({
  list: listReducer,
  item: itemReducer,
});

export default rootReducer;
