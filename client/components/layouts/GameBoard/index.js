import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CategoryName from 'Components/components/CategoryName';
import QuestionCounter from 'Components/components/QuestionCounter';
import Question from 'Components/components/Question';
import ChoiceList from 'Components/components/ChoiceList';
import ResultDisplay from 'Components/components/ResultDisplay';

import { setIdNextQuestion } from 'Store/actions/game';
import { selectQuestion, selectChoices } from 'Store/reducers/game';

const stateToProps = state => ({
  counter: state.game.questionNumber,
  numberOfQuestions: state.questions.length,
  hasQuestionAnswered: state.game.hasQuestionAnswered,
  categoryName: state.category,
  question: selectQuestion(state),
  choices: selectChoices(state)
});

const dispatchToProps = {
  onSetIdNextQuetion: setIdNextQuestion
};

class GameBoard extends Component {
  componentWillReceiveProps(newProps) {
    if (newProps.hasQuestionAnswered) {
      setTimeout(() => {
        this.props.onSetIdNextQuetion();
      }, 1500);
    }
  }

  shouldComponentUpdate(newProps) {
    const { choices } = this.props;
    if (JSON.stringify(choices) === JSON.stringify(newProps.choices)) {
      return false;
    }
    return true;
  }

  render() {
    const {
      counter,
      numberOfQuestions,
      categoryName,
      question,
      choices
    } = this.props;

    if (counter > numberOfQuestions) {
      return <ResultDisplay total={numberOfQuestions} />;
    }

    return (
      <div className="main container has-text-centered">
        <CategoryName name={categoryName} />
        <QuestionCounter counter={counter} total={numberOfQuestions} />
        <Question question={question} />
        <hr />
        <ChoiceList choices={choices} />
      </div>
    );
  }
}

GameBoard.propTypes = {
  counter: PropTypes.number.isRequired,
  numberOfQuestions: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onSetIdNextQuetion: PropTypes.func.isRequired
};

export default connect(stateToProps, dispatchToProps)(GameBoard);
