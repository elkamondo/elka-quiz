import { connect } from 'react-redux';

import { setUserAnswer } from 'Store/actions/game';
import Choice from './Choice';

const stateToProps = (state, { content }) => {
  const { hasQuestionAnswered, userAnswer, rightAnswer } = state.game;
  const isRightAnswer = userAnswer === rightAnswer;

  return {
    hasQuestionAnswered,
    success: hasQuestionAnswered && rightAnswer === content,
    failure: hasQuestionAnswered && userAnswer === content && !isRightAnswer
  };
};

const dispatchToProps = { onSetUserAnswer: setUserAnswer };

export default connect(stateToProps, dispatchToProps)(Choice);
