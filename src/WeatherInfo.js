import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="clearfix">
      <div className="cardMain">
        <div className="card-header">
          <h1>{props.data.city}</h1>
          <h2>
            <FormattedDate date={props.data.date} />
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
                    <h3> {Math.round(props.data.temperature)}</h3>
                  </li>
                  <li>
                    <img
                      src={require(`./Images/windy.png`)}
                      alt="wind"
                      width="50px"
                    />
                    <h3> {props.data.wind}</h3>
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
                    <h3> {props.data.description} </h3>
                  </li>
                  <li>
                    <img
                      src={require(`./Images/humidity.png`)}
                      alt="humid"
                      width="50px"
                    />
                    <h3> {props.data.humidity} </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
