import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="banner"><h1 id="title">BUBBLE MANIA</h1><div id="signIn"><p id="sign">Sign-in/Register</p></div></div> 
        <div id="game">
        <div id="life"><p>Life Div</p></div>
        <div id="stat"><p>Stat Div</p></div>
        <div id="score"><p>Score Div</p></div>
        <p>Game Div</p>
        </div>
        <div id="store"><h1>Store Div</h1></div>
        <div id="topPlayer"><h1>Top Player Div</h1></div>
        <div id="themeSelector"><h1>Color/Theme Div</h1></div>
      </div>
    );
  }
}

export default App;
