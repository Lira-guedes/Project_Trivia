import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
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

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { feedbackMessage } = this.state;
    return (
      <>
        <main>
          <Header />
          <p data-testid="feedback-text">{feedbackMessage}</p>

        </main>
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

const mapStateToProps = ({ player }) => ({
  numberOfRights: player.numberOfRights,
});

Feedback.propTypes = {
  numberOfRights: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(Feedback);
