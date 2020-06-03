import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div class="parallax-container">
        <h1>Clicky Game</h1>
        <h2>Click an image to test your memory and earn points!</h2>
    <div class="parallax"><img alt={props.name} src="https://images.pexels.com/photos/2521619/pexels-photo-2521619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img></div>
  </div>
   
  );
}

export default Hero;