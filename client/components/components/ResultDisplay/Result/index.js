import React from 'react';
import PropTypes from 'prop-types';

function Result({ score, total, onRetakeQuiz }) {
  return (
    <div className="container has-text-centered">
      <p>{`Tu as obtenu ${score} sur ${total}`}</p>
      <button
        className="button is-primary is-large"
        onClick={() => onRetakeQuiz()}
      >
        Rejouer
      </button>
    </div>
  );
}

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRetakeQuiz: PropTypes.func.isRequired
};

export default Result;
