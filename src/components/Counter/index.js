import React from "react";
// import Score from "./Score";

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    topScore: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
    this.setState({ topScore: this.state.topScore + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
         
        />
  
    );
  }
}

export default Counter;
