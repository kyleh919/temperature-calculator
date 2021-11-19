import { TEMPERATURE_SCALES } from "../enums/TemperatureScales";

const SCALE_KEY = "scale";
const VALUE_KEY = "value";

export class Temperature {
  /**
   * @param
   */
  toObject() {}

  /**
   * @param
   */
  fromObject() {}

  /** @property {string} */
  scale = TEMPERATURE_SCALES.CELSIUS;

  /** @property {number} */
  value = 0;
}
