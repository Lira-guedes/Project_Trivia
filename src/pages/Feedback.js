import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Feedback extends Component {
  render() {
    handleClick = () => {
      const { history } = this.props;
      history.push('/');
    };
    return (
      <>
        <Header />
        <div>
          <button
            data-testId="btn-play-again"
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
