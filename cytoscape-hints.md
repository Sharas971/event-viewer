# Cytoscape.js Hints

If you’d like to render a graph with Cytoscape.js, here’s a minimal example:

```ts
import CytoscapeComponent from "react-cytoscapejs";

export function GraphView({ elements }) {

  return (
    <CytoscapeComponent
      elements={elements}
      layout={{ name: 'concentric', minNodeSpacing: 50}}
      stylesheet={[{ selector: 'node', style: { label: 'data(label)' } }]}
      style={{ width: '100%', height: '500px' }}
    />
  );
}
```