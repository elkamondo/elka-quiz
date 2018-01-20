import * as actions from '../actions/highscores';

const initialState = {
  categories: {
    Géographie: 0,
    Histoire: 0,
    Informatique: 0,
    Maroc: 0,
    Mathématiques: 0,
    Sport: 0
  },
  newRecord: false
};

export default (state = initialState, action) => {
  const { type, category, score } = action;

  switch (type) {
    case actions.SET_HIGH_SCORE:
      return {
        ...state,
        categories: {
          ...state.categories,
          [category]:
            score > state.categories[category]
              ? score
              : state.categories[category]
        },
        newRecord: score > state.categories[category]
      };

    default:
      return state;
  }
};
