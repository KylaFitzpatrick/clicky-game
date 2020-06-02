import React from "react";
import "./style.css";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

function Score(props) {
  return (
    <>

  <nav>
    <div className="nav-wrapper">
      <a href="#!" class="brand-logo">Logo</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
      <ul className=" hide-on-med-and-down row">
      <li className="col s4">Clicky Game</li>
        <li id="msg" className="col s4"> {props.msg}</li>
        <li className="col s4"> Score: {props.score} Top Score: {props.topScore}</li>
      </ul>
    </div>
  </nav>
 
  <ul className="sidenav row" id="mobile-demo">
  <li className="center">Clicky Game</li>
          <li id="msg" className="col s4"> {props.msg}</li>
          <li className="col s4"> Score: {props.score}</li>
          <li className="col s4">Top Score: {props.topScore}</li>
  </ul>
          
          
    {/* <nav>
    <div className="nav-wrapper">
      <ul className=" hide-on-med-and-down">
        <li className="tab col s6">Clicky Game</li>
        <li id="msg" className="tab col s6"> {props.msg}</li>
        <li className="tab col s6"> Score: {props.score} | Top Score: {props.topScore}</li>
      </ul>
      </div>
        </nav>
           <ul className="sidenav" id="mobile-demo">
           <li className="tab col s6">Clicky Game</li>
          <li id="msg" className="tab col s6"> {props.msg}</li>
          <li className="tab col s6"> Score: {props.score} | Top Score: {props.topScore}</li>
         </ul> */}
         </>
  );
}

export default Score;
