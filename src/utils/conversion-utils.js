import { ethers } from "ethers";

export function divide(a, b) {
  return a / b;
}

export function multiply(a, b) {
  return a * b;
}

export function toEther(wei) {
  return ethers.utils.formatEther(wei, "Ether");
}

export function formatUnits(eth, decimals) {
  return ethers.utils.formatUnits(eth, decimals);
}

export function round(numberString, decimals) {
  return parseFloat(numberString).toFixed(decimals);
}
