# Front-End Developer Task: Cybersecurity Event Viewer

You’ll build a small front-end application that consumes a mock cybersecurity API and displays event data.

## Project Structure

You’ll find the following folders:

- `server/` – A simple REST API that returns:
  - `GET /api/v1/events` – A list of events
  - `GET /api/v1/events/:id` – Metadata and graph data (nodes + edges) for a specific event
- `react-app/` – A blank React app scaffold (feel free to use it)
- `rrv7-app/` – A blank React Router v7-based app scaffold (bonus if you use this one!)

## Your Task

Choose **one of the front-end apps** and implement:

1. **Static Dashboard Page**
   - A placeholder dashboard (use your creativity — counts, summaries, cards, etc.)
2. **Events Page**
   - A list or table of events fetched from `/api/v1/events`
   - Each event should link to a detail view
3. **Event Details Page**
   - Displays event metadata
   - Displays related nodes and edges as:
     - A table, list, or other form (acceptable)
     - Or a graph using Cytoscape.js (bonus)

## Tools

- Use **any open-source design system or CSS utility** (e.g., Material UI, shadcn/ui, TailwindCSS)
- Use **TypeScript** if possible
- You can use any state management or data-fetching strategy (e.g., hooks, React Query, etc.)

## Notes on Cytoscape.js

If you choose to visualize the graph using Cytoscape.js (not required), and you're unfamiliar with it, we’ve got you covered.

* Check the hints in `cytoscape-hints.md` (included in repo)  
* Refer to [https://js.cytoscape.org/](https://js.cytoscape.org/) and [https://github.com/plotly/react-cytoscapejs](https://github.com/plotly/react-cytoscapejs)

## Time Suggestion

This task is scoped to take **3–5 hours**. Please don't overengineer — we're more interested in your decisions, not a perfect product.

## What We’re Looking For

- Clean, idiomatic React code
- Understanding of routing and component structure
- Clear handling of data fetching and rendering
- Thoughtful UI design, even if minimal
- Bonus: SSR/Routing with React Router v7 or basic Cytoscape.js integration

## Submission

Please zip the repo or share a GitHub link (public or invite us).  
You can remove the `node_modules` and only include your implementation.
