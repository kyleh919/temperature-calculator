import React, { useState } from "react";
import { SCALE_KEY, VALUE_KEY } from "../data-types/Temperature";
import { TEMPERATURE_SCALES } from "../enums/TemperatureScales";
import { BoilingVerdict } from "./BoilingVerdict";
import { TemperatureInput } from "./TemperatureInput";

export function Calculator() {
  const [temperature, updateTemperature] = useState({
    [SCALE_KEY]: TEMPERATURE_SCALES.CELSIUS,
    [VALUE_KEY]: 23,
  });

  function handleChange(scale, e) {
    updateTemperature({ scale, value: e.target.value });
  }

  console.log(temperature);

  return (
    <>
      <TemperatureInput
        displayScale={TEMPERATURE_SCALES.FAHRENHEIT}
        temperature={temperature}
        updateTemperature={handleChange}
      />
      <TemperatureInput
        displayScale={TEMPERATURE_SCALES.CELSIUS}
        temperature={temperature}
        updateTemperature={handleChange}
      />
      <BoilingVerdict temperature={temperature} />
    </>
  );
}
