import { RECEIVE_NAVBAR } from '../constants';

const initialNavbarState = {
  navbar: []
};

export default function (state = initialNavbarState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_NAVBAR:
      newState.navbar = action.navbar;
      break;

    default:
      return state;

  }

  return newState;

}
