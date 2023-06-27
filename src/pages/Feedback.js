import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Feedback extends Component {
  redirectPlayAgay = () => {
    const { history } = this.props;
    history.push('/');
  };

  redirectRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    return (
      <>
        <div>
          <Header />
          <p data-testid="feedback-text">Feedback</p>
        </div>
        <div>
          <button
            data-testid="btn-play-again"
            onClick={ this.redirectPlayAgay }
          >
            Play Again
          </button>
          <button
            data-testid="btn-ranking"
            onClick={ this.redirectRanking }
          >
            Ranking
          </button>
        </div>
      </>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
