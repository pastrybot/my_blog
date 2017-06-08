import React, { Component } from 'react';
import {container} from './App.css';
import {NavBar} from './components';
class App extends Component {
  render() {
    return (
      <div className="dr-flex-box">
        <div className="dr-flex-item dr-top">
          <NavBar />
        </div>
        <div className="dr-flex-item dr-content">
          {this.props.children}
        </div>
        <div className="dr-flex-item dr-footer">
        </div>
      </div>
    );
  }
}
export default App;
