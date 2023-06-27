import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Feedback extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
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
            onClick={ this.handleClick }
          >
            Play Again
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
