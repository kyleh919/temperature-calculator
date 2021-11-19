import React from "react";
import { convertFrom } from "../util/conversions/temperatures";
import { scaleToReadableUnit } from "../util/translators/ScaleToReadableUnit";

export function TemperatureInput({
  displayScale,
  temperature,
  updateTemperature,
}) {
  const { scale: currentScale, value: currentValue } = temperature;

  const displayValue =
    currentScale === displayScale
      ? currentValue
      : convertFrom(currentScale, currentValue);

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
