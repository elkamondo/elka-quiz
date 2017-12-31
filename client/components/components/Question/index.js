import React from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
  return (
    <div className="Question column is-8 is-offset-2">
      <p>{question}</p>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
