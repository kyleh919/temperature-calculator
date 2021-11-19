import { TEMPERATURE_SCALES } from "../../enums/TemperatureScales";

const SCALE_TO_READABLE_UNIT = new Map([
  [TEMPERATURE_SCALES.CELSIUS, "Celsius"],
  [TEMPERATURE_SCALES.FAHRENHEIT, "Fahrenheit"],
]);

export function scaleToReadableUnit(scale) {
  function isSupported() {
    return SCALE_TO_READABLE_UNIT.has(scale);
  }

  function translate() {
    if (isSupported(scale)) {
      return SCALE_TO_READABLE_UNIT.get(scale);
    }

    console.warn(`Unsupported scale type: ${scale}.`);
    return null;
  }

  return translate();
}
