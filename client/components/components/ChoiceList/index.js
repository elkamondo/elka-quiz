import React from 'react';
import PropTypes from 'prop-types';

import ChoiceContainer from './ChoiceContainer';

function ChoiceList({ choices }) {
  return (
    <ul>
      {choices.map(choice => <ChoiceContainer key={choice} content={choice} />)}
    </ul>
  );
}

ChoiceList.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ChoiceList;
