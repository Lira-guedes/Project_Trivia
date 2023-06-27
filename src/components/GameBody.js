import propTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrentQuestion, saveQuestions } from '../redux/actions';
import QuestionContainer from './QuestionContainer';

const THREE = 3;
const FIVE = 5;
class GameBody extends Component {
  state = {
    success: true,
    index: 0,
  };

  async componentDidMount() {
    const { actionSaveQuestions } = this.props;
    const questions = await this.fetchQuestions();
    actionSaveQuestions(questions);
  }

  handleNextButtonClick = () => {
    const { questions, actionGetCurrentQuestion, history } = this.props;
    this.setState((prevState) => ({ index: prevState.index + 1 }), () => {
      const { index } = this.state;
      if (index === FIVE) {
        history.push('/feedback');
      }
      actionGetCurrentQuestion(questions, index);
    });
  };

  handleExpiredToken = () => {
    this.setState({ success: false });
    localStorage.removeItem('token');
  };

  fetchQuestions = async () => {
    const { actionGetCurrentQuestion } = this.props;
    const { index } = this.state;
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
      const data = await response.json();
      // const data = { response_code: 3 };
      if (data.response_code === THREE) { this.handleExpiredToken(); }
      if (data.response_code === 0) {
        actionGetCurrentQuestion(data.results, index);

        return data.results;
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { success } = this.state;
    const { currentQuestion } = this.props;
    // console.log(currentQuestion);
    return (
      <main>
        {
          !success ? <Redirect to="/" push />
            : (
              currentQuestion && <QuestionContainer
                currentQuestion={ currentQuestion }
                handleNextClick={ this.handleNextButtonClick }
              />)
        }
      </main>
    );
  }
}

const mapStateToProps = ({ player: { questions, currentQuestion } }) => ({
  questions,
  currentQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  actionSaveQuestions: (questions) => dispatch(saveQuestions(questions)),
  actionGetCurrentQuestion: (questions, index) => dispatch(
    getCurrentQuestion(questions, index),
  ),
});

GameBody.propTypes = {
  actionSaveQuestions: propTypes.func.isRequired,
  actionGetCurrentQuestion: propTypes.func.isRequired,
  questions: propTypes.arrayOf(propTypes.shape()).isRequired,
  currentQuestion: propTypes.shape().isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBody);
