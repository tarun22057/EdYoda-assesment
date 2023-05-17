import React, { useContext } from "react";
import PriceContext from "./PriceContext";

function TotalPrice() {
  const { selectedPrice } = useContext(PriceContext);

  return <span className="total-price-txt">{selectedPrice}</span>;
}

export default TotalPrice;
