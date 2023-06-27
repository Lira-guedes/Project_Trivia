import React, { Component } from 'react';
import propTypes from 'prop-types';
import Header from '../components/Header';
import GameBody from '../components/GameBody';
import '../style/game.css';

export default class Game extends Component {
  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        <GameBody history={ history } />
      </>
    );
  }
}

Game.propTypes = {
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};
