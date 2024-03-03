import React from "react";

export default function HowToPlay(props) {
  return (
    <div className="instruction-container">
      <div className="transparent-effect">
        <div className="rules">
          <h3>How to Play</h3>
          <div>
            Welcome to Tenzies
            <br />
            <ol type="I">
              <li>
                When you Click on the start game button, the timer will start.
              </li>
              <li>You need to click on any button individually to roll it.</li>
              <li>
                You need to make sure that the values for all the buttons are
                same, for example if you chose 1 to be on all of the buttons,
                you will roll the button until you have the desired value.
              </li>
              <li>
                Once you the have the same value on all the buttons, you can
                click on the tenzi button and the game will verify if all the
                numbers are same.
              </li>
              <li>
                Once verified the timer will stop and the game will be completed
                and you can start a new game.
              </li>
            </ol>
          </div>
          <button className="close-button" onClick={props.buttonOnClick}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}
