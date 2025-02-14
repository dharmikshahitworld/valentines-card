import React from "react";

const ValentineCard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 text-center position-relative" style={{ maxWidth: "400px" }}>
        <div className="heart-container">
          <div className="heart"></div>
        </div>

        <h2 className="valentine-title">❤️ Happy Valentine's Day! ❤️</h2>
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