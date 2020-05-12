import { RECEIVE_HEADINGS } from '../constants';

const initialHeadingsState = {
  headings: []
};

export default function (state = initialHeadingsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_HEADINGS:
      newState.headings = action.headings;
      break;

    default:
      return state;

  }

  return newState;

}
