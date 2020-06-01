import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function CardBody(props) {
  return (
    // <nav>
    // <div class="nav-wrapper">
    //   <a href="#" class="brand-logo">Clicky-Game</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html"></a></li>
        <li>Your Score: {props.score}</li>
        <li>Total Score: {props.totalScore}</li>
      </ul>
  //   </div>
  // </nav>
    // <div className="card-body">
    //   <p className="card-text">Click Count: {props.count}</p>
    //   <button className="btn btn-primary" onClick={props.handleIncrement}>
    //     Increment
    //   </button>{" "}
    //   <button className="btn btn-danger" onClick={props.handleDecrement}>
    //     Decrement
    //   </button>
    // </div>
  );
}

export default CardBody;
