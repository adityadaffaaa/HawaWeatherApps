import React from "react";
import Day from "./Day";
import { WeatherIcon } from "./weatherIcon";

const Weather = ({ data }) => {
  return (
    <section className="w-full p-6 mt-6 lg:mt-0 flex flex-col items-center gap-6 lg:gap-3 lg:p-0 backdrop-blur-sm rounded-3xl bg-[rgba(255,255,255,0.2)] lg:bg-transparent lg:backdrop-blur-none lg:w-[380px]">
      <div className="flex flex-col items-center w-full text-text2 gap-4">
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <h4 className="text-heading4 font-bold">{data.city}</h4>
            <p className="text-paragraph1 text-text3 capitalize lg:text-heading6">{data.weather[0].description}</p>
          </div>
          <img className="weather-icon h-20 lg:h-24" src={`../Assets/weather icons/${WeatherIcon(data.weather[0].icon)}.png`} alt="" />
        </div>
        <h1 className="text-[54px] font-extrabold lg:text-[92px]">{Math.round(data.main.temp)}°C</h1>
        {Day()}
      </div>
      <div className="flex flex-row justify-between w-full lg:backdrop-blur-sm lg:rounded-3xl lg:bg-[rgba(255,255,255,0.2)] lg:p-6">
        <div className="flex flex-col items-center text-text2 gap-2">
          <img className="h-[26px]" src="../Assets/Icons/curah hujan.png" alt="" />
          <div className="flex flex-col items-center">
            <p className="text-paragraph1">{Math.round(data.main.feels_like)}°C</p>
            <p className="text-paragraph4">Terasa</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-text2 gap-2">
          <img className="h-[26px]" src="../Assets/Icons/lembab.png" alt="" />
          <div className="flex flex-col items-center">
            <p className="text-paragraph1">{data.main.humidity}%</p>
            <p className="text-paragraph4">Kelembaban</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-text2 gap-2">
          <img className="h-[26px]" src="../Assets/Icons/angin.png" alt="" />
          <div className="flex flex-col items-center">
            <p className="text-paragraph1">{data.wind.speed}km/h</p>
            <p className="text-paragraph4">Laju Angin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Weather;
