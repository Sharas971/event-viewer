# Front-End Developer Task Sarunas:

To run just one server in terminal and run:

```bash
npm install
```

```bash
npm start
```

Then open rrv7-app in other terminal and either run locally:

```bash
npm install
```

```bash
npm run dev
```

or build and run:

```bash
npm install
```

```bash
npm run build
```

```bash
npm start
```

## Project Structure

You’ll find the following folders:

- `server/` – A simple REST API that returns:
  - `GET /api/v1/events` – A list of events
  - `GET /api/v1/events/:id` – Metadata and graph data (nodes + edges) for a specific event
- `rrv7-app/` – React Router v7-based app
