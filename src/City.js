import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function City(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

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

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="layout">
          <div className="row">
            <div className="col-6">
              <div className="search-box">
                <form>
                  <button className="btn-search" input type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                  <input
                    type="text"
                    className="input-search"
                    placeholder="Enter a city"
                    autoComplete="off"
                  />
                </form>
              </div>
            </div>
            <br />
            <br />

            <br />

            <div className="clearfix">
              <div className="cardMain">
                <div className="card-header">
                  <h1>{weatherData.city}</h1>
                  <h2>
                    <FormattedDate date={weatherData.date} />
                  </h2>
                  <div className="card-main">
                    <i className="material-icons"></i>
                    <div className="row">
                      <div className="col-5">
                        <ul>
                          <li>
                            <img
                              src={require(`./Images/temperature.png`)}
                              alt="temp"
                              width="50px"
                            />
                            <h3> {Math.round(weatherData.temperature)}</h3>
                          </li>
                          <li>
                            <img
                              src={require(`./Images/windy.png`)}
                              alt="wind"
                              width="50px"
                            />
                            <h3> {weatherData.wind}</h3>
                          </li>
                        </ul>
                      </div>
                      <div className="col-5">
                        <ul>
                          <li>
                            <img
                              src={require(`./Images/weather-news.png`)}
                              alt="describe"
                              width="50px"
                            />
                            <h3> {weatherData.description} </h3>
                          </li>
                          <li>
                            <img
                              src={require(`./Images/humidity.png`)}
                              alt="humid"
                              width="50px"
                            />
                            <h3> {weatherData.humidity} </h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "bd76e2bc6232f106529f184cc0d9a95d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
}
