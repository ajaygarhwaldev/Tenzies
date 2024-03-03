import React, { useEffect } from "react";
import NavBar from "./components/navbar";
import Timer from "./components/timer";
import "./app.css";
import DiceContainer from "./components/diceContainer";
import CustomButton from "./components/customButton";
import InstructionContainer from "./components/howToPlayContainer";

export default function App() {
  // Instruction Container value here
  const [showInstruction, setShowInstruction] = React.useState(false);
  function EnableInstruction() {
    setShowInstruction(true);
  }
  function DisableInstruction() {
    setShowInstruction(false);
  }

  // Timer here
  const [time, setTime] = React.useState({ minutes: 0, seconds: 0 });
  const [isTimerRunning, setIsTimerRunning] = React.useState(false);

  useEffect(() => {
    let timer;
    if (isTimerRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => {
          const seconds = prevTime.seconds + 1;
          const minutes = prevTime.minutes + Math.floor(seconds / 60);

          return {
            minutes: minutes,
            seconds: seconds % 60,
          };
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isTimerRunning]);

  // Button Values handling here
  const [buttonValues, setButtonValues] = React.useState([
    { id: 1, value: 1 },
    { id: 2, value: 1 },
    { id: 3, value: 1 },
    { id: 4, value: 1 },
    { id: 5, value: 1 },
    { id: 6, value: 1 },
    { id: 7, value: 1 },
    { id: 8, value: 1 },
    { id: 9, value: 1 },
    { id: 10, value: 1 },
  ]);

  function StartRandomValue() {
    setButtonValues((prevValue) => {
      return prevValue.map((button) => {
        return { ...button, value: Math.trunc(Math.random() * 6) + 1 };
      });
    });
  }

  function UpdatingButtonValue(e) {
    var buttonID = Number(e.target.id);
    console.log(buttonID);
    var randomValue = Math.trunc(Math.random() * 6) + 1;
    setButtonValues((prevValues) => {
      return prevValues.map((button) => {
        if (button.id === buttonID) {
          return { ...button, value: randomValue };
        } else {
          return button;
        }
      });
    });
  }

  function StartTimer() {
    StartRandomValue();
    setIsTimerRunning(true);
    setTime((prevValue) => {
      return {
        minutes: 0,
        seconds: 0,
      };
    });
  }

  // Verifying all the values
  function StopTimer() {
    var firstValue = 0;
    for (let i = 0; i < 10; i++) {
      if (i === 0) {
        firstValue = buttonValues[i].value;
      } else {
        if (firstValue === buttonValues[i].value) {
          console.log("Matched");
        } else {
          console.log("Didn't Match");
          return;
        }
      }
    }
    console.log("Completed");
    setIsTimerRunning(false);
  }

  return (
    <div>
      <NavBar buttonOnClick={EnableInstruction} />
      <Timer time={time} />
      <DiceContainer
        buttonValues={buttonValues}
        buttonClick={UpdatingButtonValue}
      />
      <CustomButton
        buttonText={isTimerRunning ? "Tenzi" : "Start"}
        buttonOnClick={isTimerRunning ? StopTimer : StartTimer}
      />
      {showInstruction ? (
        <InstructionContainer buttonOnClick={DisableInstruction} />
      ) : null}
    </div>
  );
}
