const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from the Dockerized Backend!');
});

app.listen(port, () => {
  console.log(`Backend API is running on port ${port}`);
});
