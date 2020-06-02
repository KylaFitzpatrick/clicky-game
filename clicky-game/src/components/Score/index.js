import React from "react";
import "./style.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function Score(props) {
  return (
    <>
  <nav>
    <div className="nav-wrapper">
      <ul className="row">
      <li  className="col s4">Clicky Game</li>
        <li id="msg" className="col s4">{props.msg}</li>
        <li id="score" className="col s4">Score: {props.score} Top Score: {props.topScore}</li>
      </ul>
    </div>
  </nav>
         </>
  );
}

export default Score;
