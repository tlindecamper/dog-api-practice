import React, { Component } from 'react';
import DogIndex from './dogIndex';


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Best Dog Ever Api practice</h1>
        <h2>Who's a Good Boy/Girl?</h2>
        <DogIndex/>
      </div>
    );
  }
}
