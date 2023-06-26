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
        /* button.style.backgroundColor = ' rgb(6, 240, 15)';
        button.style.border = '3px solid rgb(6, 240, 15)'; */
      } else {
        button.classList.add('incorrect-answer-colored');
        /*
        button.style.backgroundColor = 'red';
        button.style.border = '3px solid red'; */
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
    return (
      <div className="answers-btn">
        <section data-testid="answer-options">
          {
            sortedAnswers && sortedAnswers.map(({ answer, id }) => (
              <button
                key={ answer }
                data-testId={ id }
                className={ id }
                onClick={ (e) => this.handleClick(e) }
                disabled={ disabled }

              >
                {answer.replace(/&#039;/g, '\'').replace(/&quot;/g, '"')}

              </button>
            ))
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  difficultyQuestion: state.player.questions,
});

AnswerButtons.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  showNextButton: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  difficultyQuestion: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(mapStateToProps)(AnswerButtons);
