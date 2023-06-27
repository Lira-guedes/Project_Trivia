import { GET_CURRENT_QUESTION, GET_NUM_OF_RIGHTS,
  SAVE_QUESTIONS, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
  score: 0,
  numberOfRights: 0,
  questions: [
    {
      category: '',
      type: '',
      difficulty: '',
      question: '',
      correct_answer: '',
      incorrect_answers: [
      ],
    },
  ],
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

  case GET_CURRENT_QUESTION:
    return (
      {
        ...state,
        currentQuestion: action.questions[action.index],
      });
  case GET_NUM_OF_RIGHTS:
    return (
      {
        ...state,
        numberOfRights: state.numberOfRights + 1,
      }
    );
  default:
    return state;
  }
};

export default player;
