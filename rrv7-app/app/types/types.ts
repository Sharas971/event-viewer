import type { ElementDefinition } from "cytoscape";
import { EScreenSize } from "~/settings/constants";

export interface IEventData {
  id: string;
  timestamp: string;
  type: string;
  summary: string;
  graph?: ElementDefinition[];
}

export interface IEvent extends IEventData {
  graph: ElementDefinition[];
}

export type TScreenSize =
  | EScreenSize.mobile
  | EScreenSize.tablet
  | EScreenSize.desktop;

export interface IEdgeColorCase {
  caseName: string;
  colorCode: string;
}

export interface IChartDataPoint {
  name: string;
  [key: string]: number | string;
}

export type TF1Colors = { [key: string]: string };
