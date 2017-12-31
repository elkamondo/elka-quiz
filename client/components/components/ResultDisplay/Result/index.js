import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Result({ score, total, onRetakeQuiz, onChangeCategory }) {
  return (
    <div className="main container has-text-centered">
      <p>{`Tu as obtenu ${score} sur ${total}`}</p>
      <button className="button is-large" onClick={() => onRetakeQuiz()}>
        Rejouer
      </button>
      <Link
        to="/"
        className="button is-large"
        onClick={() => onChangeCategory()}
      >
        Changer la catégorie
      </Link>
    </div>
  );
}

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRetakeQuiz: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired
};

export default Result;
