import React from 'react';
import PropTypes from 'prop-types';

import ChoiceContainer from './ChoiceContainer';

function ChoiceList({ choices }) {
  return (
    <div className="c-choicelist columns is-multiline is-mobile">
      {choices.map(choice => (
        <ChoiceContainer key={choice} content={choice} />
      ))}
    </div>
  );
}

ChoiceList.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default ChoiceList;
