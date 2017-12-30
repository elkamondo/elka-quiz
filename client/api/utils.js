import questions from './data.json';

export const selectCategories = questions.map(({ category }) => category);

const findQuestionsByCategory = category =>
  questions.find(question => question.category === category);

export const selectQuestionsByCategory = category =>
  findQuestionsByCategory(category).questions || null;
