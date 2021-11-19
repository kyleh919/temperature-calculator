import { TEMPERATURE_SCALES } from "../../enums/TemperatureScales";

export function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convertFrom(scale, value) {
  return scale === TEMPERATURE_SCALES.FAHRENHEIT
    ? toCelsius(value)
    : toFahrenheit(value);
}
