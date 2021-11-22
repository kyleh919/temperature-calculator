import React from "react";
import { isBoiling } from "../util/verification/temperatures";

export function BoilingVerdict({ temperature }) {
  const boilingStatus = isBoiling(temperature);
  const boilingVerdict = boilingStatus ? `boiling` : `not boiling`;

  return <p>The water would {boilingVerdict}</p>;
}
