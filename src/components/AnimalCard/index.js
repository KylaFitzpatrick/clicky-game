import React from "react";
import "./style.css";

function AnimalCard(props) {
  return (
    <div className="card">
        <img alt={props.name} src={props.image} id={props.id} onClick={() => props.sortAnimalCard(props.id)}/>
    </div>
  );
}

export default AnimalCard;
