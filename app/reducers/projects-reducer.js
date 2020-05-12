import { RECEIVE_PROJECTS } from '../constants';

const initialProjectsState = {
  projects: []
};

export default function (state = initialProjectsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PROJECTS:
      newState.projects = action.projects;
      break;

    default:
      return state;

  }

  return newState;

}
