# Mock API Server

This is a simple Node.js + Express server that provides mock data for the front-end task.

## Requirements

- Node.js (v16+ recommended)
- npm

## How to Start

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
npm start
```

3. The server will run at:

```
http://localhost:3001
```

## Available Endpoints

- `GET /api/v1/events` – Returns a list of events
- `GET /api/v1/events/:id` – Returns metadata, nodes, and edges for a specific event