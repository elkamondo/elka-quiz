import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Result({ score, correct, total, onRetakeQuiz, onChangeCategory }) {
  return (
    <div className="main container has-text-centered">
      <section className="column is-8-desktop is-offset-2-desktop is-10-mobile is-offset-1-mobile">
        <div className="Result">
          <p className="Result-congrats title">Félicitations !</p>
          <section className="Result--score">
            <div>
              <p>Votre score</p>
              <h1 className="title is-1">{score}</h1>
            </div>
            <hr />
            <div className="columns is-mobile">
              <div className="column is-one-half">
                <p>Correct</p>
                <h3 className="title is-3">
                  {correct}/{total}
                </h3>
              </div>
              <div className="column">
                <p>Record</p>
                <h3 className="title is-3">{score}</h3>
              </div>
            </div>
          </section>
        </div>
      </section>
      <div className="columns is-multiline">
        <div className="column">
          <button
            className="Result--button button is-large"
            onClick={() => onRetakeQuiz()}
          >
            Rejouer
          </button>
        </div>
        <div className="column">
          <Link
            to="/"
            className="Result--button button is-large"
            onClick={() => onChangeCategory()}
          >
            Changer la catégorie
          </Link>
        </div>
      </div>
    </div>
  );
}

Result.propTypes = {
  score: PropTypes.number.isRequired,
  correct: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onRetakeQuiz: PropTypes.func.isRequired,
  onChangeCategory: PropTypes.func.isRequired
};

export default Result;
