import * as actions from '../actions/highscores';

const initialState = {
  Géographie: 0,
  Histoire: 0,
  Informatique: 0,
  Maroc: 0,
  Mathématiques: 0,
  Sport: 0
};

export default (state = initialState, action) => {
  const { category, score } = action;

  switch (action.type) {
    case actions.SET_HIGH_SCORE:
      return Object.assign({}, state, {
        [category]: score > state[category] ? score : state[category]
      });

    default:
      return state;
  }
};
