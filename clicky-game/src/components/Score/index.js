import React from "react";
import "./style.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function Score(props) {
  return (
      <ul id="nav-mobile" >
        <li><a href="#" class="brand-logo">Clicky-Game</a></li>
        <li className="msg">{props.msg}</li>
        <li className="right"> Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
  );
}

export default Score;
