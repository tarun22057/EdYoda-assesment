import React from "react";
import BackGround from "../logos/BackGround.png";
import SectionL from "./SectionL";
import SectionR from "./SectionR";

function Main() {
  const backgroundImageStyle = {
    background: `url(${BackGround})`
  };

  return (
    <main className="main-section" style={backgroundImageStyle}>
      <SectionL />
      <SectionR />
    </main>
  );
}

export default Main;
