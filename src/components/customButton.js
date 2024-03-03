import React from "react";

export default function CustomButton(props) {
  return (
    <button className="custom-button" onClick={props.buttonOnClick}>
      {props.buttonText}
    </button>
  );
}
