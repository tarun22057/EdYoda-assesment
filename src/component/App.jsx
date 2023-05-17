// App.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import PriceContext from "./PriceContext";

function App() {
  const [selectedPrice, setSelectedPrice] = useState("");

  const handlePriceChange = (price) => {
    setSelectedPrice(price);
  };

  return (
    <div className="App">
      <Navbar />
      <PriceContext.Provider value={{ selectedPrice, handlePriceChange }}>
        <Main />
      </PriceContext.Provider>
    </div>
  );
}

export default App;
