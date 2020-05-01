import React, { Component } from "react";
import "./App.css";
import Lottery from "./Lottery";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} numBalls={4} />
        <Lottery title='Draw 5' maxNum={25} numBalls={5} />
      </div>
    );
  }
}

export default App;
