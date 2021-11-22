import { Temperature } from "../../data-types/Temperature";
import { TEMPERATURE_SCALES } from "../../enums/TemperatureScales";
import { toCelsius } from "../conversions/temperatures";

/** @param {Temperature} temperature */
function isCelsius(temperature) {
  return temperature.getScale() === TEMPERATURE_SCALES.CELSIUS;
}

/** @param {object} currentTemperature */
export function isBoiling(currentTemperature) {
  const temperature = Temperature.fromObject(currentTemperature);
  const celsius = isCelsius(temperature)
    ? temperature.getValue()
    : toCelsius(temperature.getValue());

  return celsius > 100;
}
