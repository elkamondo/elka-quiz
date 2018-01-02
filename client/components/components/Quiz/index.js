import { connect } from 'react-redux';

import { setIdNextQuestion } from 'Store/actions/game';
import { setHighScore } from 'Store/actions/highscores';
import { selectQuestion, selectChoices } from 'Store/reducers/game';

import GameBoard from 'Components/layouts/GameBoard';

const stateToProps = state => ({
  counter: state.game.questionNumber,
  numberOfQuestions: state.questions.length,
  hasQuestionAnswered: state.game.hasQuestionAnswered,
  categoryName: state.category,
  question: selectQuestion(state),
  choices: selectChoices(state)
});

const dispatchToProps = {
  onSetIdNextQuetion: setIdNextQuestion,
  onSetHighScore: setHighScore
};

export default connect(stateToProps, dispatchToProps)(GameBoard);
