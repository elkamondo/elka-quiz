import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryName from 'Components/components/CategoryName';
import QuestionCounter from 'Components/components/QuestionCounter';
import Question from 'Components/components/Question';
import ChoiceList from 'Components/components/ChoiceList';
import ContinueButton from 'Components/components/ContinueButton';
import ResultDisplay from 'Components/components/ResultDisplay';

import { selectQuestion, selectChoices } from 'Store/reducers/game';

const stateToProps = state => ({
  counter: state.game.questionNumber,
  numberOfQuestions: state.questions.length,
  hasQuestionAnswered: state.game.hasQuestionAnswered,
  categoryName: state.category,
  question: selectQuestion(state),
  choices: selectChoices(state)
});

function GameBoard(props) {
  const {
    counter,
    numberOfQuestions,
    categoryName,
    question,
    choices,
    hasQuestionAnswered
  } = props;

  if (counter > numberOfQuestions) {
    return <ResultDisplay total={numberOfQuestions} />;
  }

  return (
    <div className="container has-text-centered">
      <CategoryName name={categoryName} />
      <QuestionCounter counter={counter} total={numberOfQuestions} />
      <Question question={question} />
      <hr />
      <ChoiceList choices={choices} />
      {hasQuestionAnswered && <ContinueButton value="Continue" />}
    </div>
  );
}

GameBoard.propTypes = {
  counter: PropTypes.number.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
  hasQuestionAnswered: PropTypes.bool.isRequired,
  categoryName: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default connect(stateToProps)(GameBoard);
