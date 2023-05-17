import React from "react";
import stage1 from "../logos/stage1.png";
import stage2 from "../logos/stage2.png";
function Stage() {
  return (
    <div className="stages-container">
      <div className="internal-container">
        <img src={stage1} alt="Signup" />
        <span>Sign Up</span>
      </div>
      <div className="internal-container">
        <img src={stage2} alt="Subscribe" />
        <span>Subscribe</span>
      </div>
    </div>
  );
}
export default Stage;
