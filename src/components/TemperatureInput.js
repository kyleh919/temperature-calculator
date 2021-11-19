import React from "react";
import { Temperature } from "../data-types/Temperature";
import { convertFrom } from "../util/conversions/temperatures";
import { scaleToReadableUnit } from "../util/translators/ScaleToReadableUnit";

export function TemperatureInput({
  displayScale,
  temperature,
  updateTemperature,
}) {
  const currentTemperature = Temperature.fromObject(temperature);

  const displayValue =
    currentTemperature.getScale() === displayScale
      ? currentTemperature.getValue()
      : convertFrom(
          currentTemperature.getScale(),
          currentTemperature.getValue()
        );

  return (
    <fieldset>
      <legend>{`Enter temperature in ${scaleToReadableUnit(
        displayScale
      )}:`}</legend>
      <input
        value={displayValue}
        onChange={(e) => updateTemperature(displayScale, e)}
      />
    </fieldset>
  );
}
