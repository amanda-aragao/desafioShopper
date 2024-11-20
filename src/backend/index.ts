import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('testando :D');
});

app.listen(8080, () => {
  console.log('Server running on http://localhost:8080');
});