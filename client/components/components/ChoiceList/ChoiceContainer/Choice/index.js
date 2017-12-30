import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Choice(props) {
  const {
    content,
    success,
    failure,
    hasQuestionAnswered,
    onSetUserAnswer
  } = props;

  const classNames = classnames({
    button: true,
    'is-large': true,
    'is-success': success,
    'is-danger': failure
  });

  return (
    <li>
      <button
        className={classNames}
        onClick={
          !hasQuestionAnswered ? () => onSetUserAnswer(content) : undefined
        }
      >
        {content}
      </button>
    </li>
  );
}

Choice.propTypes = {
  content: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  failure: PropTypes.bool.isRequired,
  hasQuestionAnswered: PropTypes.bool.isRequired,
  onSetUserAnswer: PropTypes.func.isRequired
};

export default Choice;
