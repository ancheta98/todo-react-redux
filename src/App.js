import React, { Component } from 'react';
import Tasks from "./containers/Tasks"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tasks />
      </div>
    );
  }
}

export default App;
