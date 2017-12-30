import { batchActions } from 'redux-batched-actions';
import { selectQuestions } from './questions';

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

export const selectCategory = name => ({
  type: SELECT_CATEGORY,
  name
});

export const selectCategoryAndSelectQuestions = category => dispatch =>
  dispatch(
    batchActions(
      [selectCategory(category), selectQuestions(category)],
      'SELECT_CATEGORY_AND_SELECT_QUESTIONS'
    )
  );
