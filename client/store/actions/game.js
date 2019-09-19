import { selectRightAnswer } from 'Store/selectors';
import * as actions from './index';

export const setIdNextQuestion = () => ({
  type: actions.SET_ID_NEXT_QUESTION
});

export const setUserAnswer = userAnswer => (dispatch, getState) => {
  const rightAnswer = selectRightAnswer(getState());
  dispatch({
    type: actions.SET_USER_ANSWER,
    userAnswer,
    rightAnswer
  });
};

export const setScore = score => ({
  type: actions.SET_SCORE,
  score
});

export const retakeQuiz = () => ({
  type: actions.RETAKE_QUIZ
});

export const changeCategory = () => ({
  type: actions.CHANGE_CATEGORY
});
