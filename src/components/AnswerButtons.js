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
    console.log(incorrectAnswers);
    // Retorna um valor aleatório entre -0.5 e 0.5 para cada iteração no array, gerando uma ordem aleatória.
    const answers = [correctAnswer, ...incorrectAnswers]
      .sort(() => Math.random() - ZERO_DOT_FIFE);

    this.setState({ sortedAnswers: answers });
  };

  render() {
    const { sortedAnswers } = this.state;
    return (
      <section>
        {
          sortedAnswers && sortedAnswers.map((answer) => (
            <button key={ answer }>{answer}</button>
          ))
        }
      </section>
    );
  }
}

AnswerButtons.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.arrayOf(PropTypes.string).isRequired,
};
