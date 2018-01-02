import React from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
  return (
    <div className="Question column is-8-desktop is-offset-2-desktop">
      <p>{question}</p>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
