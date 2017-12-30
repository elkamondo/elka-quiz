import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setIdNextQuestion } from 'Store/actions/game';

const dispatchToProps = { onSetIdNextQuestion: setIdNextQuestion };

function ContinueButton({ value, onSetIdNextQuestion }) {
  return (
    <button
      className="button is-large is-primary"
      onClick={() => onSetIdNextQuestion()}
    >
      {value}
    </button>
  );
}

ContinueButton.propTypes = {
  value: PropTypes.string.isRequired,
  onSetIdNextQuestion: PropTypes.func.isRequired
};

export default connect(null, dispatchToProps)(ContinueButton);
