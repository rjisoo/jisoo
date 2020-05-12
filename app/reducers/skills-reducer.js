import { RECEIVE_SKILLS } from '../constants';

const initialSkillsState = {
  skills: []
};

export default function (state = initialSkillsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_SKILLS:
      newState.skills = action.skills;
      break;

    default:
      return state;

  }

  return newState;

}
