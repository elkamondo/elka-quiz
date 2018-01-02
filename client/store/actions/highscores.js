export const SET_HIGH_SCORE = 'SET_HIGH_SCORE';
export const SAVE_HIGHSCORES = 'SAVE_HIGHSCORES';

export const setHighScore = () => (dispatch, getState) => {
  const { category, game: { score } } = getState();
  dispatch({
    type: SET_HIGH_SCORE,
    category,
    score
  });
};

export const saveHighScores = () => (dispatch, getState) => {
  const { highscores } = getState();
  localStorage.setItem('quiz-highscores', JSON.stringify(highscores));
  dispatch({ type: SAVE_HIGHSCORES });
};
