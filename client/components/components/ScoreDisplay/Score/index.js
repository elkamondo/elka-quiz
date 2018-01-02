import React from 'react';
import PropTypes from 'prop-types';

function Score({ score, record }) {
  return (
    <div className="column">
      <h4 className="subtitle is-4 is-pulled-left">
        Score: <span className="has-text-weight-semibold">{score}</span>
      </h4>
      <h4 className="subtitle is-4 is-pulled-right">
        Record: <span className="has-text-weight-semibold">{record}</span>
      </h4>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
  record: PropTypes.number.isRequired
};

export default Score;
