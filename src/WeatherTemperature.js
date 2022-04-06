import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <span>
        <img
          src={require(`./Images/temperature.png`)}
          alt="temp"
          width="50px"
        />
        <h3 className="temperature">{Math.round(props.celsius)} </h3>
        <span className="unit">
          °C|
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <img
          src={require(`./Images/temperature.png`)}
          alt="temp"
          width="50px"
        />
        <h3 className="temperature"> {Math.round(farenheit)} </h3>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}
