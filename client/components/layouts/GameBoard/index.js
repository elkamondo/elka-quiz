import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ScoreDisplay from 'Components/components/ScoreDisplay';
import ProgressBarContainer from 'Components/components/ProgressBarContainer';
import CategoryName from 'Components/components/CategoryName';
import QuestionCounter from 'Components/components/QuestionCounter';
import Question from 'Components/components/Question';
import ChoiceList from 'Components/components/ChoiceList';
import ResultDisplay from 'Components/components/ResultDisplay';

class GameBoard extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    numberOfQuestions: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    choices: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onSetIdNextQuetion: PropTypes.func.isRequired,
    onSetHighScore: PropTypes.func.isRequired
  };

  componentWillReceiveProps(newProps) {
    if (newProps.hasQuestionAnswered) {
      navigator.vibrate(200);
      setTimeout(() => {
        this.props.onSetIdNextQuetion();
      }, 1500);
    }

    if (newProps.counter > newProps.numberOfQuestions) {
      this.props.onSetHighScore();
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

    if (numberOfQuestions === 0) {
      return <Redirect to="/" />;
    }

    if (counter > numberOfQuestions) {
      return <ResultDisplay total={numberOfQuestions} />;
    }

    return (
      <div className="c-gameboard container has-text-centered">
        <ScoreDisplay />
        <ProgressBarContainer speed={400} />
        {CategoryName({ name: categoryName })}
        {QuestionCounter({ counter, total: numberOfQuestions })}
        {Question({ question })}
        {ChoiceList({ choices })}
      </div>
    );
  }
}

export default GameBoard;
