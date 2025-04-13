import type { NodeSingularMetadata, EdgeSingular } from "cytoscape";
import type { IEdgeColorCase } from "~/types/types";
import { getEdgeColorCode } from "../utils/helpers";

export enum ENodeColors {
  main = "#2680ed",
  edge = "#7d93b8",
  selected = "#324563",
  edgePrimary = "#c27070",
  edgeSecondary = "#f5e198",
  edgeTertiary = "#8797e8",
}

export enum ECaseNames {
  downloaded = "downloaded",
  on = "on",
  source = "source",
  target = "target",
  using = "using",
}

const edgeColorCases: IEdgeColorCase[] = [
  { caseName: ECaseNames.downloaded, colorCode: ENodeColors.edgePrimary },
  { caseName: ECaseNames.on, colorCode: ENodeColors.edgeSecondary },
  { caseName: ECaseNames.source, colorCode: ENodeColors.edgePrimary },
  { caseName: ECaseNames.target, colorCode: ENodeColors.edgeSecondary },
  { caseName: ECaseNames.using, colorCode: ENodeColors.edgeTertiary },
];

const NODE_STYLE = {
  selector: "node",
  style: {
    "background-color": ENodeColors.main,
    "border-width": 1,
    "border-style": "solid",
    "border-color": ENodeColors.main,
    label: "data(label)",
    width: (el: NodeSingularMetadata) => 22 + 10 * el.degree(false),
    height: (el: NodeSingularMetadata) => 22 + 10 * el.degree(false),
  },
};

const EDGE_STYLE = [
  {
    selector: "edge",
    style: {
      width: 3,
      "target-arrow-shape": "triangle",
      "curve-style": "bezier",
      "line-color": (el: EdgeSingular) => getEdgeColorCode(el, edgeColorCases),
      "target-arrow-color": (el: EdgeSingular) =>
        getEdgeColorCode(el, edgeColorCases),
    },
  },
  {
    selector: "edge.bezier",
    css: {
      "curve-style": "bezier",
      "control-point-step-size": 22,
    },
  },
];

const SELECTED_NODE = {
  selector: ":selected",
  css: {
    "border-width": 1,
    "border-style": "solid",
    "border-color": ENodeColors.selected,
    "background-color": ENodeColors.selected,
  },
};

export const NETWORK_GRAPH = [NODE_STYLE, ...EDGE_STYLE, SELECTED_NODE];
