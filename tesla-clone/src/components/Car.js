import React from "react";
import "../styles/car.css";
import ButtonPrimary from "./ButtonPrimary";
const Car = ({ imgSrc, model, testDrive }) => {
  return (
    <div className="car">
      <div className="car__image">
        <img src={imgSrc} alt={model} />
      </div>
      <h2 className="car__model">{model}</h2>
      <div className="car__actions">
        <ButtonPrimary name="order" />
      </div>
      <div className="car__info">
        <span>Request a call</span> to speak with a product specialist, value
        your trade-in or apply for leasing
      </div>
    </div>
  );
};

export default Car;
