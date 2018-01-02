import { connect } from 'react-redux';

import { retakeQuiz, changeCategory } from 'Store/actions/game';
import { saveHighScores } from 'Store/actions/highscores';
import Result from './Result';

const stateToProps = ({ category, game, highscores }) => ({
  score: game.score,
  correct: game.correctAnswers,
  record: highscores[category]
});

const dispatchToProps = {
  onRetakeQuiz: retakeQuiz,
  onChangeCategory: changeCategory,
  onSaveHighScores: saveHighScores
};

export default connect(stateToProps, dispatchToProps)(Result);
