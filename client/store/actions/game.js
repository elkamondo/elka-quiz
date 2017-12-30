import { selectRightAnswer } from 'Store/reducers/game';

export const SET_ID_NEXT_QUESTION = 'SET_ID_NEXT_QUESTION';
export const SET_USER_ANSWER = 'SET_USER_ANSWER';
export const RETAKE_QUIZ = 'RETAKE_QUIZ';

export const setIdNextQuestion = () => ({
  type: SET_ID_NEXT_QUESTION
});

export const setUserAnswer = userAnswer => (dispatch, getState) => {
  const rightAnswer = selectRightAnswer(getState());
  dispatch({
    type: SET_USER_ANSWER,
    userAnswer,
    rightAnswer
  });
};

export const retakeQuiz = () => ({
  type: RETAKE_QUIZ
});
