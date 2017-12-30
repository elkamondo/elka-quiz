import { selectQuestionsByCategory, shuffleArray } from 'Api/utils';
import { SELECT_QUESTIONS } from '../actions/questions';
import { RETAKE_QUIZ } from '../actions/game';

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_QUESTIONS:
      return [...selectQuestionsByCategory(action.category)];

    case RETAKE_QUIZ:
      return [...shuffleArray(state)];

    default:
      return state;
  }
};