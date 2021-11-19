import { TEMPERATURE_SCALES } from "../enums/TemperatureScales";

export const SCALE_KEY = "scale";
export const VALUE_KEY = "value";

// schema for Temperature = { scale: TEMPERATURE_SCALES, temperature: number }
export class Temperature {
  /**
   * @param {Temperature} from
   */
  static toObject(from) {
    return {
      [SCALE_KEY]: from.getScale(),
      [VALUE_KEY]: from.getValue(),
    };
  }

  /**
   * @returns {Temperature}
   */
  static fromObject(from) {
    const to = new Temperature();

    to.setScale(from[SCALE_KEY]);
    to.setValue(from[VALUE_KEY]);

    return to;
  }

  /** @property {string} */
  scale_ = TEMPERATURE_SCALES.CELSIUS;

  /** @property {number} */
  value_ = 0;

  /** @return {string} */
  getScale() {
    return this.scale_;
  }

  /** @param {string} scale */
  setScale(scale) {
    this.scale_ = scale;
    return this;
  }

  /** @return {number} */
  getValue() {
    return this.value_;
  }

  /** @param {number} value */
  setValue(value) {
    this.value_ = value;
    return this;
  }

  /** @param {Temperature} other */
  clone(other) {
    this.scale_ = other.getScale();
    this.value_ = other.getValue();
  }
}
