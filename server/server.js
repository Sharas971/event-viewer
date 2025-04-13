const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

// In-memory mock data
const events = new Map([
  ['event1', {
    id: 'event1',
    timestamp: '2025-04-01T10:00:00Z',
    type: 'LoginAttempt',
    summary: 'Suspicious login attempt detected',
    graph: [

      { data: { id: 'user1', label: 'User: John Doe' } },
      { data: { id: 'ip0', label: 'IP: 172.16.30.123' } },
      { data: { id: 'ip1', label: 'IP: 192.168.1.5' } },
      { data: { id: 'ip2', label: 'IP: 192.168.1.100' } },
      { data: { id: 'ip3', label: 'IP: 192.168.1.99' } },
      { data: { id: 'ip4', label: 'IP: 192.168.1.127' } },
      { data: { id: 'event1', label: 'Event: auth-failed' } },
      { data: { id: 'event2', label: 'Event: auth-failed' } },
      { data: { id: 'event3', label: 'Event: auth-failed' } },
      { data: { id: 'event4', label: 'Event: auth-success' } },
      
      { data: { source: 'event1', target: 'ip0', label: 'source' } },
      { data: { source: 'event1', target: 'ip1', label: 'target' } },
      { data: { source: 'event1', target: 'user1', label: 'using' } },
      { data: { source: 'event2', target: 'ip0', label: 'source' } },
      { data: { source: 'event2', target: 'ip2', label: 'target' } },
      { data: { source: 'event2', target: 'user1', label: 'using' } },
      { data: { source: 'event3', target: 'ip0', label: 'source' } },
      { data: { source: 'event3', target: 'ip3', label: 'target' } },
      { data: { source: 'event3', target: 'user1', label: 'using' } },
      { data: { source: 'event4', target: 'ip0', label: 'source' } },
      { data: { source: 'event4', target: 'ip4', label: 'target' } },
      { data: { source: 'event4', target: 'user1', label: 'using' } },
    ],
  }],
  ['event2', {
    id: 'event2',
    timestamp: '2025-04-01T12:15:00Z',
    type: 'FileDownload',
    summary: 'Sensitive file downloaded',
    graph: [

      { data: { id: 'user1', label: 'User: Alice' } },
      { data: { id: 'computer1', label: "Computer: some-pc" } },
      { data: { id: 'file1', label: 'File: secret.pdf' } },
      { data: { id: 'file2', label: 'File: sales_pipeline.pdf' } },
      { data: { id: 'file3', label: 'File: card_numbers.pdf' } },
      { data: { id: 'system1', label: 'Systm: Corp. Sharepoint' } },

      { data: { source: 'user1', target: 'computer1', label: 'on' } },
      { data: { source: 'user1', target: 'file1', label: 'downloaded' } },
      { data: { source: 'user1', target: 'file2', label: 'downloaded' } },
      { data: { source: 'user1', target: 'file3', label: 'downloaded' } },
      { data: { source: 'file1', target: 'system1', label: 'downloaded' } },
      { data: { source: 'file2', target: 'system1', label: 'downloaded' } },
      { data: { source: 'file3', target: 'system1', label: 'downloaded' } },

    ],
  }]
]);

// GET /api/v1/events - returns list of events
app.get('/api/v1/events', (req, res) => {
  const list = Array.from(events.values()).map(({ id, timestamp, type, summary }) => ({
    id,
    timestamp,
    type,
    summary
  }));
  res.json(list);
});

// GET /api/v1/events/:id - returns full event data
app.get('/api/v1/events/:id', (req, res) => {
  const event = events.get(req.params.id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }
  res.json(event);
});

app.listen(port, () => {
  console.log(`Mock API server listening at http://localhost:${port}`);
});
