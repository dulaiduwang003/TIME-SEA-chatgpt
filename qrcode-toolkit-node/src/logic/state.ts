import type { QRCodeGeneratorState, State } from "./types";

export function defaultGeneratorState(text?: string): QRCodeGeneratorState {
  return {
    text: text || "",
    ecc: "M",
    margin: 1,
    scale: 20,
    lightColor: "#ffffff",
    darkColor: "#000000",
    pixelStyle: "rounded",
    markerStyle: "rounded",
    markerShape: "random",
    markerInnerShape: "plus",
    markerSub: "square",
    markers: [],
    maskPattern: 1,
    minVersion: 1,
    maxVersion: 40,
    boostECC: false,
    rotate: 180,
    invert: false,
    marginNoise: false,
    marginNoiseRate: 0.5,
    marginNoiseOpacity: 1,
    seed: Math.round(Math.random() * 1000000),
    marginNoiseSpace: "marker",
    renderPointsType: "all",

    effect: "none",
    effectTiming: "after",
    effectCrystalizeRadius: 8,
    effectLiquidifyDistortRadius: 8,
    effectLiquidifyRadius: 8,
    effectLiquidifyThreshold: 128,

    transformPerspectiveX: 0,
    transformPerspectiveY: 0,
    transformScale: 1,
  };
}
