import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export default function City() {
  let weatherData = {
    city: "Perth",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    humidity: 80,
    wind: 3,
  };

  return (
    <div className="container">
      <div className="layout">
        <br />
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
                <h2> {weatherData.date}</h2>
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
                          <h3> {weatherData.temperature}</h3>
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
}
