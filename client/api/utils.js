import questions from './data.json';

const findQuestionsByCategory = category =>
  questions.find(question => question.category === category);

export function shuffleArray(array) {
  const copyArray = [...array];
  for (let i = copyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }
  return copyArray;
}

export const selectCategories = questions.map(({ category }) => category);

export function selectQuestionsByCategory(category) {
  return shuffleArray(findQuestionsByCategory(category).questions) || null;
}
