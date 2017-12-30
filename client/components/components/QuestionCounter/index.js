import React from 'react';
import PropTypes from 'prop-types';

function QuestionCounter({ counter, total }) {
  return (
    <p>
      {counter} / {total}
    </p>
  );
}

QuestionCounter.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCounter;
