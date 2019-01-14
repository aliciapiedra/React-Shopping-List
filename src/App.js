import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Shopping List"/>
      </div>
    );
  }
}

export default App;
