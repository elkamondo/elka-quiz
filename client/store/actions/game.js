export const SET_ID_NEXT_QUESTION = 'SET_ID_NEXT_QUESTION';
export const SET_ANSWER = 'SET_ANSWER';

export const setIdNextQuestion = id => ({
  type: SET_ID_NEXT_QUESTION,
  id
});

export const setAnswer = answer => ({
  type: SET_ANSWER,
  answer
});
