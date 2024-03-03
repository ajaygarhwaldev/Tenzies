import React from "react";

export default function Timer(props) {
  return (
    <div className="timer-container">
      <h2>
        {props.time.minutes}:{props.time.seconds}
      </h2>
    </div>
  );
}
