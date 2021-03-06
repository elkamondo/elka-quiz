import { connect } from 'react-redux';

import Score from './Score';

const stateToProps = ({ category, game, highscores }) => ({
  score: game.score,
  record: highscores.categories[category]
});

export default connect(stateToProps)(Score);
