import type { EdgeSingular } from "cytoscape";
import type { IEdgeColorCase } from "~/types/types";
import { ENodeColors } from "../settings/graphConstants";

export const getEdgeColorCode = (
  el: EdgeSingular,
  cases: IEdgeColorCase[]
): string => {
  const label = el.data("label");
  const matchingCase = cases.find((c) => c.caseName === label);
  return matchingCase ? matchingCase.colorCode : ENodeColors.edge;
};
