import React, { Component } from "react";
import Coin from "./Coin";

class Tosser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      face: "heads",
      countHeads: 0,
      countTails: 0,
      isFlipping: false
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  flipCoin() {
    var val = Math.round(Math.random());
    val === 0
      ? this.setState(curState => ({
          ...curState,
          counter: curState.counter + 1,
          countTails: curState.countTails + 1,
          face: "tails"
        }))
      : this.setState(curState => ({
          ...curState,
          counter: curState.counter + 1,
          countHeads: curState.countHeads + 1,
          face: "heads"
        }));
    setTimeout(() => {
      this.setState({ isFlipping: true });
    }, 1);
    this.setState({ isFlipping: false });
  }

  render() {
    return (
      <section>
        <h1>Let's flip a coin!</h1>
        <Coin face={this.state.face} flipping={this.state.isFlipping} />
        <button onClick={this.flipCoin}>Flip me</button>
        <p>
          Out of {this.state.counter} flips, there have been{" "}
          {this.state.countHeads} heads and {this.state.countTails} tails
        </p>
      </section>
    );
  }
}

export default Tosser;
