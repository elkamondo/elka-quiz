import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setAnswer } from 'Store/actions/game';
import Choice from './Choice';

const stateToProps = ({ game, questions }) => ({
  isAnswered: game.isAnswered,
  id: game.idCurrentQuestion,
  answers: questions.map(q => q.answer),
  userAnswer: game.answer
});

function ChoiceList(props) {
  const { id, choices, answers, setAnswer, isAnswered, userAnswer } = props;
  return (
    <ul>
      {choices.map(choice => (
        <Choice
          key={choice}
          content={choice}
          isAnswered={isAnswered}
          isRightAnswer={choice === choices[answers[id]]}
          userAnswer={userAnswer}
          onSetAnswer={() => setAnswer(choice)}
        />
      ))}
    </ul>
  );
}

ChoiceList.propTypes = {
  id: PropTypes.number.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string.isRequired),
  answers: PropTypes.arrayOf(PropTypes.number.isRequired),
  isAnswered: PropTypes.bool.isRequired,
  userAnswer: PropTypes.string.isRequired,
  setAnswer: PropTypes.func.isRequired
};

ChoiceList.defaultProps = {
  choices: [],
  answers: []
};

export default connect(stateToProps, { setAnswer })(ChoiceList);
