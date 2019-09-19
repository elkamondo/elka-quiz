import { createSelector } from 'reselect';

import { shuffleArray } from 'Api/utils';

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
