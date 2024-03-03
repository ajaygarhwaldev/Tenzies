import React from "react";
import CustomButton from "../components/customButton";

export default function NavBar(props) {
  return (
    <nav>
      <CustomButton buttonText="?" buttonOnClick={props.buttonOnClick} />
    </nav>
  );
}
