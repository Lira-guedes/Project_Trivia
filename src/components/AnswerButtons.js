import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ZERO_DOT_FIFE = 0.5;
export default class AnswerButtons extends Component {
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

  handleClick = () => {
    const { showNextButton } = this.props;
    const buttons = Array.from(document.querySelectorAll('button'));
    buttons.forEach((button) => {
      if (button.className === 'correct-answer') {
        button.style.backgroundColor = ' rgb(6, 240, 15)';
        button.style.border = '3px solid rgb(6, 240, 15)';
      } else {
        button.style.backgroundColor = 'red';
        button.style.border = '3px solid red';
      }
    });
    showNextButton();
  };

  render() {
    const { sortedAnswers } = this.state;
    const { disabled } = this.props;
    return (
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
    );
  }
}

AnswerButtons.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
  showNextButton: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
