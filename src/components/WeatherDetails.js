import React, { useEffect, useState } from "react";

function WeatherDetails({
  temp,
  humidity,
  pressure,
  weatherType,
  name,
  speed,
  country,
  sunset,
}) {
  const [wetherState, setWetherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWetherState("wi-day-cloudy");
          break;
        case "Haze":
          setWetherState("wi-fog");
          break;
        case "Clear":
          setWetherState("wi-day-sunny");
          break;
        case "Mist":
          setWetherState("wi-dust");
          break;
        case "Rain":
          setWetherState("wi-day-rain");
          break;
      }
    }
  }, [weatherType]);
  //converting the seconds in time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <div>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${wetherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM
                <br />
                Sunset
              </p>
            </div>

            <div className="weather-extra-info">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br />
                Wind Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default WeatherDetails;
