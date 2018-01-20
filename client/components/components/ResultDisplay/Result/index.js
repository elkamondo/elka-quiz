import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Result extends PureComponent {
  static propTypes = {
    score: PropTypes.number.isRequired,
    record: PropTypes.number.isRequired,
    correct: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    newRecord: PropTypes.bool.isRequired,
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
    const { score, record, correct, total, newRecord } = this.props;

    return (
      <div className="main container has-text-centered">
        <section className="column is-paddingless is-8-desktop is-offset-2-desktop">
          <div className="Result">
            <p className="Result-congrats title">Félicitations !</p>
            <section className="Result--score">
              <div>
                <p>Votre score</p>
                {newRecord ? (
                  <span className="has-text-weight-bold">
                    <span
                      role="img"
                      aria-label="Winners Trophy"
                      className="is-size-1"
                      style={{ color: '#ffb817' }}
                    >
                      &#x1F3C6;
                      <span style={{ color: '#b28010' }}>{score}</span>
                      &#x1F3C6;
                    </span>
                  </span>
                ) : (
                  <span className="is-size-1 has-text-weight-bold">
                    {score}
                  </span>
                )}
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
                  <span
                    className="is-size-3 has-text-weight-bold"
                    style={{ color: newRecord ? '#b28010' : '#4a4a4a' }}
                  >
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

// darken: #b28010
// lighten: #FFB817
