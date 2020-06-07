import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="parallax-container">
        <h1>Clicky Game</h1>
        <h2>Click an image to test your memory and earn points!</h2>
    <div className="parallax"><img alt="landscape" src="https://images.pexels.com/photos/2521619/pexels-photo-2521619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=1010"></img></div>
  </div>
   
  );
}

export default Hero;