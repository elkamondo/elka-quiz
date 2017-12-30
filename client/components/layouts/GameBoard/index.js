import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import QuestionCounter from 'Components/components/QuestionCounter';
import Question from 'Components/components/Question';
import ChoiceList from 'Components/components/ChoiceList';

import { setIdNextQuestion } from 'Store/actions/game';

const stateToProps = ({ category, game, questions }) => ({
  category,
  number: game.questionNumber,
  id: game.idCurrentQuestion,
  questions: questions.map(q => q.question),
  choices: questions.map(q => q.choices)
});

class GameBoard extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    questions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    choices: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
    setIdNextQuestion: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { questions } = this.props;
    this.props.setIdNextQuestion(Math.floor(Math.random() * questions.length));
  }

  render() {
    const { id, category, number, questions, choices } = this.props;
    return (
      <div className="container has-text-centered">
        <p>{category}</p>
        <QuestionCounter number={number} total={questions.length} />
        <Question question={questions[id]} />
        <hr />
        <ChoiceList choices={choices[id]} />
      </div>
    );
  }
}

export default connect(stateToProps, { setIdNextQuestion })(GameBoard);
