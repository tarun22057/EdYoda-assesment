import React from "react";
import limited from "../logos/limitedt.png";
function Limited() {
  return (
    <div className="ltd-offer">
      <div className="alert-head">
        <span className="alert-text">Limited time offer</span>
        <span className="total-amt">-₹18,401</span>
      </div>
      <span className="alert-body">
        <img src={limited} alt="" />
        Offer Valid till 25th March 2023
      </span>
    </div>
  );
}
export default Limited;
