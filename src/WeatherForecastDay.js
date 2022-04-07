import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C `;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3> {day()} </h3>
      </div>
      <div className="card-main">
        <WeatherIcon code={props.data.weather[0].icon} />
        <div className="main description">
          <br />
          <h3>{minTemperature()}</h3>

          <h3>{maxTemperature()}</h3>
        </div>
      </div>
    </div>
  );
}
