import { SAVE_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  score: 0,
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_QUESTIONS:
    return ({
      ...state,
      questions: action.questions,
    });
  default:
    return state;
  }
};

export default gameReducer;