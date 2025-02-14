import React from "react";
import "@fontsource/dancing-script";

const ValentineCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="position-absolute top-0 text-dark fw-lighter text-center">Mission accomplished! Live site updated only for you Hiral ☺️</div>
      <div className="shadow-lg p-4 text-center position-relative" style={{ maxWidth: "400px" }}>
        {/* Enlarged Heart */}
        <div className="heart-container">
          <div className="heart"></div>
        </div>

        {/* New Title "Dear Hiral..." */}
        <h2 className="valentine-title">Dear Hiral Shah...</h2>

        <h1 className="valentine-main-title">❤️ Happy Valentine's Day! ❤️</h1>

        <p className="valentine-message">
          You make the world look a little more beautiful every time I see you. 🌎✨
        </p>
        <p className="valentine-message">
          If smiles could light up a day, yours would be my favorite sunshine! ☀️💛
        </p>
        <p className="valentine-message">Hope your day is as amazing as you are! 😉💖</p>
      </div>
    </div>
  );
};

export default ValentineCard;