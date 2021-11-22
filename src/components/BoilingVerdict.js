import React from "react";
import { isBoiling } from "../util/verification/temperatures";

export function BoilingVerdict({ temperature }) {
  const boilingStatus = isBoiling(temperature);
  const boilingVerdict = boilingStatus ? `boil` : `not boil`;

  return <p>The water would {boilingVerdict}</p>;
}
