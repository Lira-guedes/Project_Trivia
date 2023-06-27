import { GET_CURRENT_QUESTION, SAVE_QUESTIONS,
  SAVE_SCORE, SAVE_CORRECT } from '../actions';

const INITIAL_STATE = {
  score: 0,
  correct_question: 0,
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

  case SAVE_CORRECT:
    return (
      {
        ...state,
        correct_question: action.correct,
      });

  default:
    return state;
  }
};

export default player;
