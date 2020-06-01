import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuários');

  response.json(['Andrei', 'Francisco', 'da', 'Rosa']);
});

app.listen(3333);