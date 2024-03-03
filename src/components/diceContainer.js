import React from "react";
import DiceButton from "./DiceButton";

export default function DiceContainer(props) {
  return (
    <div className="dice-container">
      {props.buttonValues.map((item) => {
        return (
          <DiceButton
            text={item.value}
            id={item.id}
            key={item.id}
            buttonClick={props.buttonClick}
          />
        );
      })}
    </div>
  );
}
