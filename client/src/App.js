import React, { Component } from 'react';

import {container} from './App.css';

class App extends Component {
  render() {
    return (
      <div className={container}>
      {this.props.children}
        <h2>Bloggity blog blog blog</h2>
      </div>
    );
  }
}

export default App;
