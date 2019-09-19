import { connect } from 'react-redux';

import { setScore, setUserAnswer } from 'Store/actions/game';
import ProgressBar from './ProgressBar';

const stateToProps = ({ game }) => ({
  hasQuestionAnswered: game.hasQuestionAnswered
});

const dispatchToProps = {
  onSetScore: setScore,
  onSetUserAnswer: setUserAnswer
};

export default connect(
  stateToProps,
  dispatchToProps
)(ProgressBar);
