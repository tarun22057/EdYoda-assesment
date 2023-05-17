import React from "react";
import Limited from "./Limited";
import TotalPrice from "./TotalPrice";
function Total(props) {
  console.log(props.totalPrice);
  return (
    <div className="total-container">
      <div className="txt">
        <span className="txt-span1">Subscription Fee</span>
        <span className="txt-span2">₹18,500</span>
      </div>
      <Limited />
      <div className="txt">
        <span className="txt-span1">Total (Incl. of 18% GST)</span>
        <TotalPrice totalPrice={props.totalPrice} />
      </div>
    </div>
  );
}
export default Total;
