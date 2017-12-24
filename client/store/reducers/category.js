import * as actions from 'Store/actions/category';

export default (state = '', action) => {
  switch (action.type) {
    case actions.SELECT_CATEGORY:
      return action.name;

    default:
      return state;
  }
};
