import * as actions from '../actions';

const initialState = {
  questionNumber: 1,
  hasQuestionAnswered: false,
  userAnswer: '',
  rightAnswer: '',
  currentQuestionId: 0,
  score: 0,
  correctAnswers: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ID_NEXT_QUESTION:
      return {
        ...state,
        currentQuestionId: state.currentQuestionId + 1,
        questionNumber: state.questionNumber + 1,
        userAnswer: '',
        rightAnswer: '',
        hasQuestionAnswered: false
      };

    case actions.SET_USER_ANSWER:
      return {
        ...state,
        hasQuestionAnswered: true,
        userAnswer: action.userAnswer,
        rightAnswer: action.rightAnswer
      };

    case actions.SET_SCORE:
      return {
        ...state,
        score:
          state.userAnswer === state.rightAnswer
            ? state.score + action.score
            : state.score,
        correctAnswers:
          state.userAnswer === state.rightAnswer
            ? state.correctAnswers + 1
            : state.correctAnswers
      };

    case actions.RETAKE_QUIZ:
    case actions.CHANGE_CATEGORY:
      return { ...initialState };

    default:
      return state;
  }
};
