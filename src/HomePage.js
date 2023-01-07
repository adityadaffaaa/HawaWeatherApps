import { React, useState } from "react";
import { WeatherAPIKEY, WeatherApiURL } from "./components/api";
import Footer from "./components/Footer";
import Forecast from "./components/Forecast";
import Search from "./components/Search";
import Weather from "./components/Weather";

const HomePage = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const SearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const weatherFetch = fetch(`${WeatherApiURL}/weather?lat=${lat}&lon=${lon}&lang=id&appid=${WeatherAPIKEY}&units=metric`);
    const forecastFetch = fetch(`${WeatherApiURL}/forecast?lat=${lat}&lon=${lon}&lang=id&appid=${WeatherAPIKEY}&units=metric`);

    Promise.all([weatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };

  console.log(weather);
  console.log(forecast);

  var BgImage = () => {
    if (weather != null) {
      const Main = weather.weather[0].main;
      if (Main === "Clear") {
        return "weather-image (3).png";
      } else if (Main === "Rain") {
        return "weather-image (2).png";
      } else if (Main === "Extreme") {
        return "weather-image (1).png";
      } else if (Main === "Clouds" || Main === "Fog") {
        return "weather-image (4).png";
      }
    } else {
      return "weather-image (3).png";
    }
  };

  return (
    <main className="w-full h-[100vh] relative">
      <img className="w-full h-full object-cover absolute top-0 -z-50" src={`Assets/weather image indicator/${BgImage()}`} alt="" />
      <div className="w-full h-full flex justify-center bg-gradient-to-b from-[rgba(34,13,80,0.1)] to-background3 lg:items-center">
        <div className="w-full h-full lg:w-3/4 overflow-y-auto px-6 container lg:h-auto lg:flex lg:flex-col lg:items-center">
          <Search handleOnSearchChange={SearchChange} />
          {weather == null ? <h1 className="lg:text-heading1 text-center md:text-heading2 text-heading5 font-bold text-text2 mt-6 lg:mt-0 ">Silakan cari kota Anda</h1> : <Weather data={weather} />}
          {forecast && <Forecast data={forecast} />}
          <Footer />
        </div>
      </div>
    </main>
  );
};
export default HomePage;
