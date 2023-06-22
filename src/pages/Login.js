import React, { Component } from 'react';

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default class Login extends Component {
  state = {
    disabled: true,
    user: '',
    email: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    const { email, user } = this.state;
    this.setState({
      [name]: value,
    });
    const disabled = (user.length !== 0 && this.validateEmail(email));
    console.log(disabled);
    this.setState({ disabled: !disabled });
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
        <button data-testid="btn-play" disabled={ disabled }>Play</button>
      </form>
    );
  }
}
