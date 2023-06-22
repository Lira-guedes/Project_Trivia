export const SAVE_USER_DATA_IN_GLOBAL_STORE = 'SAVE_USER_DATA_IN_GLOBAL_STORE';

export const saveUserDataInGlobalStore = (userData) => ({
  type: SAVE_USER_DATA_IN_GLOBAL_STORE,
  userData,
});
