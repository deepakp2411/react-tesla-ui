import React from "react";
import "../styles/tesla-account.css";
import Car from "./Car";

const TeslaAccount = () => {
  return (
    <div className="teslaAccount__car">
      <Car
        imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
        model="model s"
        testDrive
      />
      <Car
        imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
        model="model s"
        testDrive
      />
      <Car
        imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
        model="model x"
      />
     
    </div>
  );
};

export default TeslaAccount;
