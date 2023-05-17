import React from "react";
import Stage from "./Stage";
import Subscriptions from "./Subscriptions";
import SubHeader from "./SubHeader";
import Total from "./Total";
import Buttons from "./Buttons";
import RazorIcon from "./RazorIcon";

function Form() {
  return (
    <form action="" className="form">
      <Stage />
      <SubHeader />
      <Subscriptions />
      <Total />
      <Buttons />
      <RazorIcon />
    </form>
  );
}
export default Form;
