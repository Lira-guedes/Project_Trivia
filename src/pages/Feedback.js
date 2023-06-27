import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const { numberOfRights } = this.props;
    let feedbackMessage;

    if (numberOfRights < THREE) {
      feedbackMessage = 'Could be better...';
    } else {
      feedbackMessage = 'Well Done!';
    }

    this.setState({ feedbackMessage }, () => {
      console.log(numberOfRights);
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
    return (
      <>
        <main>
          <Header />
          <p data-testid="feedback-text">{ feedbackMessage }</p>
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
  numberOfRights: player.correct_question,
});

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  numberOfRights: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
