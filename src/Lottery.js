import React, { Component } from "react";
import Ball from "./Ball";

import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({ length: this.props.numBalls }),
    };
    this.generate = this.generate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.generate();
  }

  generate(numBalls, maxNum) {
    this.setState(curState => ({
      nums: curState.nums.map(
          (n) => Math.floor(Math.random() * this.props.maxNum) + 1),
    }));
  }

  render() {
    let props = this.props;

    return (
      <div className="Lottery">
        <div>
          <h1>{props.title}</h1>
          <div>
            {this.state.nums.map((v) => (
              <Ball num={v} />
            ))}
          </div>
          <button onClick={this.handleClick}>Generate</button>
        </div>
      </div>
    );
  }
}

export default Lottery;
