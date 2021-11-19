import React from "react";
import { isBoiling } from "../util/verification/temperatures";

export function BoilingVerdict({ temperature }) {
  const boilingStatus = isBoiling(temperature);

  console.log(boilingStatus);

  return <p>BoilingVerdict goes here</p>;
}
