import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveQuestions } from '../redux/actions';
import QuestionContainer from './QuestionContainer';

const THREE = 3;
class GameBody extends Component {
  state = {
    success: true,
  };

  async componentDidMount() {
    const { actionSaveQuestions } = this.props;
    const results = await this.fetchQuestions();
    actionSaveQuestions(results);
  }

  handleExpiredToken = () => {
    this.setState({ success: false });
    localStorage.removeItem('token');
  };

  fetchQuestions = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
      const data = await response.json();
      // const data = { response_code: 3 };
      if (data.response_code === THREE) { this.handleExpiredToken(); }
      if (data.response_code === 0) {
        return data.results;
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { success } = this.state;
    const { questions } = this.props;
    return (
      <main>
        {
          !success ? <Redirect to="/" push />
            : questions && <QuestionContainer question={ questions[0] } />
        }
      </main>
    );
  }
}

const mapStateToProps = ({ player: { questions } }) => ({
  questions,
});

const mapDispatchToProps = (dispatch) => ({
  actionSaveQuestions: (questions) => dispatch(saveQuestions(questions)),
});

GameBody.propTypes = {
  actionSaveQuestions: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf().isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameBody);
