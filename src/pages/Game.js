import React, { Component } from 'react';
import Header from '../components/Header';
import GameBody from '../components/GameBody';

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
