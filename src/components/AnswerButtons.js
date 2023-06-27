import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addScore } from '../redux/actions';

const ZERO_DOT_FIFE = 0.5;
class AnswerButtons extends Component {
  state = {
    sortedAnswers: [],
  };

  componentDidMount() {
    this.sortAnswers();
  }

  componentDidUpdate(prevProps) {
    const { currentQuestion } = this.props;
    if (currentQuestion !== prevProps.currentQuestion) {
      this.sortAnswers();
    }
  }

  sortAnswers = () => {
    const { correctAnswer, incorrectAnswers } = this.props;
    const correctAnswerObject = { id: 'correct-answer', answer: correctAnswer };
    const incorrectAnswersObject = incorrectAnswers
      .map((answer) => ({ id: 'wrong-answer', answer }));
    // Retorna um valor aleatório entre -0.5 e 0.5 para cada iteração no array, gerando uma ordem aleatória.
    const answers = [correctAnswerObject, ...incorrectAnswersObject]
      .sort(() => Math.random() - ZERO_DOT_FIFE);

    this.setState({ sortedAnswers: answers });
  };

  handleClick = ({ target }) => {
    const { showNextButton, correctAnswer,
      dispatch, timer, difficultyQuestion } = this.props;
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => {
      if (button.className === 'correct-answer') {
        button.classList.add('correct-answer-colored');
      } else {
        button.classList.add('incorrect-answer-colored');
      }
    });
    showNextButton();

    // Contador de score:
    const minimumScore = 10;
    const difficultyPoints = {
      hard: 3,
      medium: 2,
      easy: 1,
    };

    const difficulty = difficultyPoints[difficultyQuestion[0].difficulty];

    const points = minimumScore + (timer * difficulty);
    if (target.textContent === correctAnswer) {
      dispatch(addScore(points));
    }
  };

  render() {
    const { sortedAnswers } = this.state;
    const { disabled } = this.props;
    // console.log(this.props.currentQuestion);

    return (
      <section data-testid="answer-options">
        {
          sortedAnswers && sortedAnswers.map(({ answer, id }) => (
            <button
              key={ answer }
              data-testid={ id }
              className={ id }
              onClick={ (e) => this.handleClick(e) }
              disabled={ disabled }

            >
              {answer.replace(/&#039;/g, '\'').replace(/&quot;/g, '"')}

            </button>
          ))
        }
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  difficultyQuestion: state.player.questions,
  currentQuestion: state.player.currentQuestion,
});

AnswerButtons.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  showNextButton: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  difficultyQuestion: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default connect(mapStateToProps)(AnswerButtons);
