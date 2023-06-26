import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';

const INTERVAL = 1000;

export default class QuestionContainer extends Component {
  state = {
    next: false,
    disabled: false,
    counter: 30,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }, INTERVAL);
  }

  componentDidUpdate() {
    const { counter, disabled } = this.state;
    if (counter === 0 && !disabled) {
      clearInterval(this.timer);
      this.setState({ disabled: true, next: true });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  showNextButton = () => {
    this.setState({ next: true, disabled: true });
    clearInterval(this.timer);
  };

  handleNextButton = () => {
    const { handleNextClick } = this.props;
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => {
      if (button.className === 'correct-answer') {
        button.classList.remove('correct-answer-colored');
      } else {
        button.classList.remove('incorrect-answer-colored');
      }
    });
    this.setState({ next: false, disabled: false });
    clearInterval(this.timer);
    handleNextClick();
  };

  render() {
    const {
      currentQuestion: {
        category,
        question,
        correct_answer: correctAnswer, incorrect_answers: incorrectAnswers },
    } = this.props;
    const { next, disabled, counter } = this.state;
    return (
      <>
        <h2 data-testId="question-category">{category}</h2>
        <p data-testId="question-text">{question.replace(/&#039;/g, '\'').replace(/&quot;/g, '"').replace(/&rsquo;/g, '\'')}</p>
        <AnswerButtons
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
          showNextButton={ this.showNextButton }
          disabled={ disabled }
          timer={ counter }
        />
        {next && (
          <button
            data-testId="btn-next"
            onClick={ this.handleNextButton }
          >
            Next

          </button>
        )}
      </>
    );
  }
}

QuestionContainer.propTypes = {
  currentQuestion: PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleNextClick: PropTypes.func.isRequired,
};
