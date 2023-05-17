import React from "react";
import icon1 from "../logos/Icon1.png";
import icon2 from "../logos/Icon2.png";
import icon3 from "../logos/Icon3.png";
import icon4 from "../logos/Icon4.png";
import icon5 from "../logos/Icon5.png";

function Pointer() {
  const features = [
    {
      logo: icon1,
      text: "100+ Job relevant courses"
    },
    {
      logo: icon2,
      text: "20,000+ Hours of content live"
    },
    {
      logo: icon3,
      text: "Exclusive webinar access"
    },
    {
      logo: icon4,
      text: "Scholarship worth ₹94,500"
    },
    {
      logo: icon5,
      text: "Ad Free learning experience"
    }
  ];

  return (
    <div>
      {features.map((feature, index) => (
        <div key={index} className="pointer-conatiner">
          <img src={feature.logo} alt="Logo" className="pointer-logo" />
          <span className="pointer-text">
            {feature.text.split(" ").map((word, index) => (
              <span
                key={index}
                className={
                  word.includes("+") ||
                  word.includes("₹") ||
                  word === "Exclusive" ||
                  word === "Ad" ||
                  word === "Free"
                    ? "blue-text"
                    : ""
                }
              >
                {word}{" "}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Pointer;
