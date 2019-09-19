import * as actions from 'Store/actions/category';
import { CHANGE_CATEGORY } from '../actions';

export default (state = '', action) => {
  switch (action.type) {
    case actions.SELECT_CATEGORY:
      return action.name;

    case CHANGE_CATEGORY:
      return '';

    default:
      return state;
  }
};
