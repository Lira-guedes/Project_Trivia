import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveUserDataInGlobalStore } from '../redux/actions';
import '../style/login.css';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

class Login extends Component {
  state = {
    user: '',
    email: '',
    disabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { email, user } = this.state;
    this.setState({
      [name]: value,
    });
    const disabled = (user.length !== 0 && this.validateEmail(email));
    this.setState({ disabled: !disabled });
  };

  fetchToken = async () => {
    const response = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await response.json();
    localStorage.setItem('token', data.token);
  };

  handleClick = async ({ target }) => {
    const { history, actionSaveUserData } = this.props;
    if (target.name === 'game') {
      await this.fetchToken();
      const { email, user } = this.state;
      const userData = { user, email };
      actionSaveUserData(userData);
    }

    history.push(`/${target.name}`);
  };

  validateEmail = (email) => regex.test(email);

  render() {
    const { disabled, user, email } = this.state;
    return (
      <div className="login-box">
        <img alt="trivia-logo" src="./trivia.png" />
        <form className="login-form">
          <label className="form-label">
            Name
            <input
              type="text"
              data-testid="input-player-name"
              name="user"
              value={ user }
              onChange={ this.handleChange }
            />
          </label>
          <label className="form-label">
            Email
            <input
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
              data-testid="input-gravatar-email"
            />
          </label>
          <button
            className="btn"
            type="button"
            name="game"
            data-testid="btn-play"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Play
          </button>
          <button
            className="btn"
            type="button"
            name="settings"
            data-testid="btn-settings"
            onClick={ this.handleClick }
          >
            Settings
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionSaveUserData: (userData) => dispatch(saveUserDataInGlobalStore(userData)),
});

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
  actionSaveUserData: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
