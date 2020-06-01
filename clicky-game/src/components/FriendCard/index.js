import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
      </div>
      {/* <button onClick={props.handleIncrement} >
        𝘅
      </button> */}
    </div>
  );
}

export default FriendCard;
