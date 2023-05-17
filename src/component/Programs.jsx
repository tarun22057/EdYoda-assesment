import React from "react";
import downArrow from "../logos/Vectordown.png";
function Programs() {
  return (
    <div className="nav-items">
      {" "}
      Programs <img src={downArrow} alt="down arrow from more options" />
    </div>
  );
}
export default Programs;
