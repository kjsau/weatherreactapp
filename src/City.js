import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function City(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    const apiKey = "bd76e2bc6232f106529f184cc0d9a95d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="layout">
          <div className="row">
            <div className="col-6">
              <div className="search-box">
                <form onSubmit={handleSubmit}>
                  <button className="btn-search" input type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Enter a city"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                </form>
              </div>
            </div>
            <br />
            <br />

            <br />
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
  }
}
