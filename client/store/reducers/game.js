import { createSelector } from 'reselect';

import { shuffleArray } from 'Api/utils';
import * as actions from '../actions/game';

const initialState = {
  questionNumber: 1,
  hasQuestionAnswered: false,
  userAnswer: '',
  rightAnswer: '',
  currentQuestionId: 0,
  score: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_ID_NEXT_QUESTION:
      return Object.assign({}, state, {
        currentQuestionId: state.currentQuestionId + 1,
        questionNumber: state.questionNumber + 1,
        userAnswer: '',
        rightAnswer: '',
        hasQuestionAnswered: false
      });

    case actions.SET_USER_ANSWER:
      return Object.assign({}, state, {
        hasQuestionAnswered: true,
        userAnswer: action.userAnswer,
        rightAnswer: action.rightAnswer,
        score:
          action.userAnswer === action.rightAnswer
            ? state.score + 1
            : state.score
      });

    case actions.RETAKE_QUIZ:
    case actions.CHANGE_CATEGORY:
      return Object.assign({}, state, initialState);

    default:
      return state;
  }
};

const questionsSelector = state => state.questions;
const currentQuestionIdSelector = state => state.game.currentQuestionId;

export const selectQuestion = createSelector(
  questionsSelector,
  currentQuestionIdSelector,
  (questions, id) => (id < questions.length ? questions[id].question : '')
);

export const selectChoices = createSelector(
  questionsSelector,
  currentQuestionIdSelector,
  (questions, id) =>
    id < questions.length ? shuffleArray(questions[id].choices) : []
);

export const selectRightAnswer = createSelector(
  questionsSelector,
  currentQuestionIdSelector,
  (questions, id) => (id < questions.length ? questions[id].answer : '')
);
