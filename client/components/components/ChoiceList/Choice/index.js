import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Choice(props) {
  const { content, onSetAnswer, isAnswered, isRightAnswer, userAnswer } = props;
  const evalUserAnswer = userAnswer === content;

  const classNames = classnames({
    button: true,
    'is-large': true,
    'is-info': !isAnswered,
    'is-danger': isAnswered && evalUserAnswer && !isRightAnswer,
    'is-success': isAnswered && (evalUserAnswer || isRightAnswer)
  });

  return (
    <li>
      <button
        className={classNames}
        onClick={!isAnswered ? onSetAnswer : undefined}
      >
        {content}
      </button>
    </li>
  );
}

Choice.propTypes = {
  content: PropTypes.string.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  isRightAnswer: PropTypes.bool.isRequired,
  userAnswer: PropTypes.string.isRequired,
  onSetAnswer: PropTypes.func.isRequired
};

export default Choice;
