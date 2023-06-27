import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

const THREE = 3;
class Feedback extends Component {
  state = {
    feedbackMessage: '',
  };

  componentDidMount() {
    this.getFeedbackMessage();
  }

  getFeedbackMessage = () => {
    const { assertions } = this.props;
    let feedbackMessage;
    if (assertions < THREE) {
      feedbackMessage = 'Could be better...';
    } else {
      feedbackMessage = 'Well Done!';
    }
    this.setState({ feedbackMessage }, () => {
      console.log(assertions);
    });
  };

  redirectPlayAgay = () => {
    const { history } = this.props;
    history.push('/');
  };

  redirectRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { feedbackMessage } = this.state;
    const { score, assertions } = this.props;
    return (
      <>
        <div>
          <Header />
          <p data-testid="feedback-text">{ feedbackMessage }</p>
          <p data-testid="feedback-total-score">{ score }</p>
          <p data-testid="feedback-total-question">{ assertions }</p>
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

const mapStateToProps = ({ player }) => ({
  score: player.score,
  assertions: player.assertions,
});

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
