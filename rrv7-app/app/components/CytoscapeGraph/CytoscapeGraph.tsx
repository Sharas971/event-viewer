import { useEffect, useRef, useCallback } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import type { ElementDefinition, Core } from "cytoscape";
import { CtaButton } from "../Button/CtaButton";
import useScreenSize from "~/hooks/useScreenSize";
import { EScreenSizeThresholds } from "~/settings/constants";
import { NETWORK_GRAPH } from "~/settings/graphConstants";
import s from "./CytoscapeGraph.module.scss";

interface CytoscapeGraphProps {
  graphData: ElementDefinition[];
}

export const CytoscapeGraph = ({ graphData }: CytoscapeGraphProps) => {
  const cyRef = useRef<Core | null>(null);
  const screenSize = useScreenSize({
    mobile: EScreenSizeThresholds.mobile,
    tablet: EScreenSizeThresholds.tablet,
  });

  const redrawGraph = useCallback(() => {
    if (cyRef.current) {
      cyRef.current.elements().remove();
      cyRef.current.add(graphData);
      cyRef.current.reset();
      cyRef.current
        .layout({
          name: "breadthfirst",
          animate: true,
        })
        .run();
    }
  }, [graphData]);

  useEffect(() => {
    redrawGraph();
  }, [screenSize, redrawGraph]);

  return (
    <>
      <CytoscapeComponent
        cy={(cy) => {
          cyRef.current = cy;
        }}
        className={s.graph}
        elements={graphData}
        layout={{
          name: "breadthfirst",
          animate: true,
        }}
        stylesheet={NETWORK_GRAPH}
      />
      <CtaButton
        className={s.button}
        onClick={() => redrawGraph()}
        text="re-centre"
      />
    </>
  );
};
