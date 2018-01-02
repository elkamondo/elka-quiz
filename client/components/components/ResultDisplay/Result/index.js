import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Result extends PureComponent {
  static propTypes = {
    score: PropTypes.number.isRequired,
    record: PropTypes.number.isRequired,
    correct: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onRetakeQuiz: PropTypes.func.isRequired,
    onChangeCategory: PropTypes.func.isRequired,
    onSaveHighScores: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.onSaveHighScores();
  }

  handleRetakeQuiz = () => {
    this.props.onRetakeQuiz();
  };

  handleChangeCategory = () => {
    this.props.onChangeCategory();
  };

  render() {
    const { score, record, correct, total } = this.props;

    return (
      <div className="main container has-text-centered">
        <section className="column is-paddingless is-8-desktop is-offset-2-desktop">
          <div className="Result">
            <p className="Result-congrats title">Félicitations !</p>
            <section className="Result--score">
              <div>
                <p>Votre score</p>
                <span className="is-size-2 has-text-weight-bold">{score}</span>
              </div>
              <hr />
              <div className="columns is-mobile">
                <div className="column">
                  <p>Correct</p>
                  <span className="is-size-3 has-text-weight-bold">
                    {correct}/{total}
                  </span>
                </div>
                <div className="column">
                  <p>Record</p>
                  <span className="is-size-3 has-text-weight-bold">
                    {record}
                  </span>
                </div>
              </div>
            </section>
          </div>
        </section>

        <div className="columns is-multiline">
          <div className="column">
            <button
              className="Result--button button is-large is-size-5-mobile"
              onClick={this.handleRetakeQuiz}
            >
              Rejouer
            </button>
          </div>

          <div className="column">
            <Link
              to="/"
              className="Result--button button is-large is-size-5-mobile"
              onClick={this.handleChangeCategory}
            >
              Changer la catégorie
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
