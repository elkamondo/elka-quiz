import * as actions from '../actions/game';

const initialState = {
  answeredQuestions: [],
  idCurrentQuestion: 0,
  questionNumber: 1,
  score: 0,
  answer: '',
  isAnswered: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ID_NEXT_QUESTION:
      return Object.assign({}, state, { idCurrentQuestion: action.id });

    case actions.SET_ANSWER:
      return Object.assign({}, state, {
        isAnswered: true,
        answer: action.answer
      });

    default:
      return state;
  }
};
