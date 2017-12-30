import { selectQuestionsByCategory } from 'Api/utils';
import { SELECT_QUESTIONS } from '../actions/questions';

export default (state = [], action) => {
  switch (action.type) {
    case SELECT_QUESTIONS:
      return [...selectQuestionsByCategory(action.category)];

    default:
      return state;
  }
};
