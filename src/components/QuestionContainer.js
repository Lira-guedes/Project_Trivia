import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnswerButtons from './AnswerButtons';

export default class QuestionContainer extends Component {
  state = {
    next: false,
  };

  showNextButton = () => {
    this.setState({ next: true });
    console.log('showNextButton');
  };

  render() {
    const {
      question: {
        category,
        question,
        correct_answer: correctAnswer, incorrect_answers: incorrectAnswers },
    } = this.props;
    const { next } = this.state;
    return (
      <main>
        <h2 data-testId="question-category">{category}</h2>
        <p data-testId="question-text">{question}</p>
        <AnswerButtons
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
          showNextButton={ this.showNextButton }
        />
        {next && <button data-testId="btn-next">Next</button>}
      </main>
    );
  }
}

QuestionContainer.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    correct_answer: PropTypes.string.isRequired,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
