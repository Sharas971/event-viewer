import type { TF1Colors } from "~/types/types";

export const DEBOUNCE_DELAY = 200;
export const NOT_AVAILABLE = "N/A";

export enum EScreenSize {
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
}

export enum EScreenSizeThresholds {
  mobile = 389,
  tablet = 767,
  desktop = 1000,
}

export const f1Colors: TF1Colors = {
  Ferrari: "#E80020",
  Mercedes: "#27F4D2",
  RedBull: "#3671C6",
  Hamilton: "#27F4D2",
  Verstappen: "#3671C6",
  Leclerc: "#E80020",
};
