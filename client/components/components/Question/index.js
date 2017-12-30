import React from 'react';
import PropTypes from 'prop-types';

function Question({ question }) {
  return <p>{question}</p>;
}

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
