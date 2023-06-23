export const SAVE_USER_DATA_IN_GLOBAL_STORE = 'SAVE_USER_DATA_IN_GLOBAL_STORE';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';

export const saveUserDataInGlobalStore = (userData) => ({
  type: SAVE_USER_DATA_IN_GLOBAL_STORE,
  userData,
});

export const saveQuestions = (questions) => ({
  type: SAVE_QUESTIONS,
  questions,
});
