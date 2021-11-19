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
  scale_ = TEMPERATURE_SCALES.CELSIUS;

  /** @property {number} */
  value_ = 0;

  /** @return {string} */
  getScale() {}

  /** @param {string} scale */
  setScale(scale) {
    this.scale_ = scale;
    return this;
  }

  /** @return {number} */
  getValue() {}

  /** @param {number} value */
  setValue(value) {
    this.value_ = value;
    return this;
  }
}
