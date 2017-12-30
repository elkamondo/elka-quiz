import { connect } from 'react-redux';

import { retakeQuiz } from 'Store/actions/game';
import Result from './Result';

const stateToProps = ({ game }) => ({
  score: game.score
});

const dispatchToProps = {
  onRetakeQuiz: retakeQuiz
};

export default connect(stateToProps, dispatchToProps)(Result);
