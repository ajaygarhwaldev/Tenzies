import React from "react";

export default function DiceButton(props) {
  return (
    <button className="dice-button" onClick={props.buttonClick} id={props.id}>
      {props.text}
    </button>
  );
}
