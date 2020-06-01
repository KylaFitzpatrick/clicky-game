import React from "react";
import "./style.css";

function Title(props) {
  return <nav className="navbar">{props.children}
  <ul>
    <li className="brand">
Clicky Game
    </li>
    <li></li>
    <li>
Score:
    </li>
    <li>
Top Score:
    </li>
  </ul>
  </nav>;
}

export default Title;
