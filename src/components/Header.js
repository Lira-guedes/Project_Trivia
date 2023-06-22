import React, { Component } from 'react';

export default class Game extends Component {
  render() {
    return (
      <header>
        <img alt="User Avatar" src="" data-test-id="header-profile-picture" />
        <p data-test-id="header-player-name">Nome</p>
        <p data-test-id="header-score">Score</p>
      </header>
    );
  }
}
