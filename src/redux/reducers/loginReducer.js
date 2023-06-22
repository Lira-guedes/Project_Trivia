import { SAVE_USER_DATA_IN_GLOBAL_STORE } from '../actions';

const INITIAL_STATE = {
  user: '',
  email: '',
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_USER_DATA_IN_GLOBAL_STORE:
    console.log('works');
    return ({
      ...state,
      user: action.userData.user,
      email: action.userData.email,
    });

  default:
    return state;
  }
};

export default loginReducer;
