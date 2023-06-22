import React, { Component } from 'react';
import propTypes from 'prop-types';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default class Login extends Component {
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

  handleClick = () => {
    this.fetchToken();
    const { history } = this.props;
    history.push('/game');
  };

  validateEmail = (email) => regex.test(email);

  render() {
    const { disabled, user, email } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Name"
          data-testid="input-player-name"
          name="user"
          value={ user }
          onChange={ this.handleChange }
        />
        <input
          type="email"
          name="email"
          value={ email }
          placeholder="email@exemple.com"
          onChange={ this.handleChange }
          data-testid="input-gravatar-email"
        />
        <button
          type="button"
          data-testid="btn-play"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Play
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
