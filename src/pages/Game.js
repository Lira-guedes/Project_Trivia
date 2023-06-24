import React, { Component } from 'react';
import Header from '../components/Header';
import GameBody from '../components/GameBody';
import '../style/game.css';

export default class Game extends Component {
  render() {
    return (
      <>
        <Header />
        <GameBody />
      </>
    );
  }
}
