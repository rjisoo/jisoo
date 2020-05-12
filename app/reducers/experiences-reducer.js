import { RECEIVE_EXPERIENCES } from '../constants';

const initialExperiencesState = {
  experiences: []
};

export default function (state = initialExperiencesState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_EXPERIENCES:
      newState.experiences = action.experiences;
      break;

    default:
      return state;

  }

  return newState;

}
