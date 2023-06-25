import { SAVE_QUESTIONS, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_QUESTIONS:
    return ({
      ...state,
      questions: action.questions,
    });
  case SAVE_SCORE:
    return ({
      ...state,
      score: state.score + action.score,
    });
  default:
    return state;
  }
};

export default player;
