import { connect } from 'react-redux';

import { retakeQuiz, changeCategory } from 'Store/actions/game';
import Result from './Result';

const stateToProps = ({ game }) => ({
  score: game.score
});

const dispatchToProps = {
  onRetakeQuiz: retakeQuiz,
  onChangeCategory: changeCategory
};

export default connect(stateToProps, dispatchToProps)(Result);
