import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card">
      {/* <div className="img-container"> */}
        <img alt={props.name} src={props.image} id={props.id} onClick={() => props.shuffleAnimalCard(props.id)}/>
      {/* </div> */}
    </div>
  );
}

export default AnimalCard;
