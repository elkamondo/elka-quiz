import React from 'react';
import PropTypes from 'prop-types';

function QuestionCounter({ number, total }) {
  return (
    <p>
      {number} / {total}
    </p>
  );
}

QuestionCounter.propTypes = {
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCounter;
