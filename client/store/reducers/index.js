import { combineReducers } from 'redux';

import category from './category';
import questions from './questions';
import game from './game';
import highscores from './highscores';

const rootReducer = combineReducers({
  category,
  questions,
  game,
  highscores
});

export default rootReducer;
