import { RECEIVE_CONTACTS } from '../constants';

const initialContactsState = {
  contacts: []
};

export default function (state = initialContactsState, action) {
  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CONTACTS:
      newState.contacts = action.contacts;
      break;

    default:
      return state;

  }
  
  return newState;

}
