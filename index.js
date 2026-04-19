const express = require('express');
const path = require('path');

const app = express();

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// optional API route (just for fun)
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Kubernetes API 👋' });
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
