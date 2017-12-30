import { combineReducers } from 'redux';

import category from './category';
import questions from './questions';
import game from './game';

const rootReducer = combineReducers({
  category,
  questions,
  game
});

export default rootReducer;
