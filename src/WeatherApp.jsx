import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelLike: 22.04,
    temp: 21.73,
    tempMin: 21.73,
    tempMax: 22.05,
    humidity: 35,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather App by Soumya</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
