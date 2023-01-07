export var WeatherIcon = (param) => {
  if (
    param !== "01d" &&
    param !== "01n" &&
    param !== "02d" &&
    param !== "02n" &&
    param !== "03d" &&
    param !== "03n" &&
    param !== "04d" &&
    param !== "04n" &&
    param !== "09d" &&
    param !== "09n" &&
    param !== "10d" &&
    param !== "10n" &&
    param !== "11d" &&
    param !== "11n" &&
    param !== "12d" &&
    param !== "12n" &&
    param !== "50d" &&
    param !== "50n"
  ) {
    return "unknown";
  } else {
    return param;
  }
};
