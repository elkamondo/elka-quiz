import React from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
  return (
    <div>
      <p>{question}</p>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string
};

Question.defaultProps = {
  question: ''
};

export default Question;
