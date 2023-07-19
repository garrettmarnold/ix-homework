const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/api/v2/pokemon/', (req, res) => {
  const { type } = req.params;
  const url = `https://pokeapi.co/api/v2/type/${type.toLowerCase()}`;

  axios.get(url)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
