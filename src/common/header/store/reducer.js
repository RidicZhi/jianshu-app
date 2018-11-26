import { SEARCH_FOCUSED, SEARCH_BLUR } from '../../../store/actionTypes';

const defaultState = {
    focused: false
};

export default (state = defaultState, action) => {
  if(action.type === SEARCH_FOCUSED){
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = true;
    return newState;
  }
  if(action.type === SEARCH_BLUR){
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = false;
    return newState;
  }

  return state;
}