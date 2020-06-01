import React from "react";
import CardBody from "./CardBody";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    totalScore: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    this.setState({ totalScore: this.state.totalScore + 1 });
  };

  // // handleDecrement decreases this.state.count by 1
  // handleDecrement = () => {
  //   // We always use the setState method to update a component's state
  //   this.setState({ count: this.state.count - 1 });
  // };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Clicky-Game</a>
        {/* </div> */}
        <CardBody
          score={this.state.score}
          totalScore={this.state.totalScore}
          handleIncrement={this.handleIncrement}
          // handleDecrement={this.handleDecrement}
        />
      </div>
  </nav>
    );
  }
}

export default Counter;
