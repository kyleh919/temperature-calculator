import React, { useState } from "react";
import { TEMPERATURE_SCALES } from "../enums/TemperatureScales";
import { BoilingVerdict } from "./BoilingVerdict";
import { TemperatureInput } from "./TemperatureInput";

export function Calculator() {
  // schema for state = { scale: 'c', temperature: 23 }
  const [temperature, updateTemperature] = useState({
    scale: TEMPERATURE_SCALES.CELSIUS,
    value: 23,
  });

  function handleChange(scale, e) {
    updateTemperature({ scale, value: e.target.value });
  }

  console.log(temperature);

  return (
    <>
      <TemperatureInput
        displayScale="f"
        temperature={temperature}
        updateTemperature={handleChange}
      />
      <TemperatureInput
        displayScale="c"
        temperature={temperature}
        updateTemperature={handleChange}
      />
      <BoilingVerdict temperature={temperature} />
    </>
  );
}
