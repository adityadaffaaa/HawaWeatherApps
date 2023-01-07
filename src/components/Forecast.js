import React from "react";
import { WeatherIcon } from "./weatherIcon";

const Forecast = ({ data }) => {
  const listHari = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
  const Hari = new Date().getDay();
  const ForecastHari = listHari.slice(Hari, listHari.length).concat(listHari.slice(0, Hari));
  console.log(ForecastHari);
  return (
    <section className="forecast my-6 lg:my-0 lg:mt-6 w-full">
      <ul className="flex flex-col items-center text-text2 gap-4 lg:flex-row lg:justify-between">
        {data.list.splice(0, 7).map((konten, index) => {
          return <ForecastElement key={index} icon={WeatherIcon(konten.weather[0].icon)} temp={Math.round(konten.main.temp)} hari={ForecastHari[index]} />;
        })}
      </ul>
    </section>
  );
};

export default Forecast;

var ForecastElement = ({ hari, icon, temp }) => {
  return (
    <li className="flex flex-row w-full justify-between items-center lg:flex-col lg:gap-1 lg:p-6 lg:backdrop-blur-sm lg:rounded-3xl lg:w-auto lg:bg-[rgba(255,255,255,0.2)]">
      <p className="text-paragraph1">{hari}</p>
      <img className="h-[52px]" src={`Assets/weather icons/${icon}.png`} alt="" />
      <p className="text-paragraph2">{temp}°C</p>
    </li>
  );
};
