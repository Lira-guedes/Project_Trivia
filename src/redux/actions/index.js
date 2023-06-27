export const SAVE_USER_DATA_IN_GLOBAL_STORE = 'SAVE_USER_DATA_IN_GLOBAL_STORE';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const SAVE_SCORE = 'SAVE_SCORE';

export const GET_CURRENT_QUESTION = 'GET_CURRENT_QUESTION';

export const GET_NUM_OF_RIGHTS = 'GET_NUM_OF_RIGHTS';

export const saveUserDataInGlobalStore = (userData) => ({
  type: SAVE_USER_DATA_IN_GLOBAL_STORE,
  userData,
});

export const saveQuestions = (questions, score) => ({
  type: SAVE_QUESTIONS,
  questions,
  score,
});

export const addScore = (score, authReducer) => ({
  type: SAVE_SCORE, score, authReducer,
});

export const getCurrentQuestion = (questions, index) => ({
  type: GET_CURRENT_QUESTION,
  questions,
  index,
});

export const getNumberOfRights = () => ({
  type: GET_NUM_OF_RIGHTS,
});
