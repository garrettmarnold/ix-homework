const express = require('express');
const axios = require('axios');
const cors = require('cors')

const app = express();
const port = 3000;

app.get('/ditto', (req, res) => {
  const { type } = req.params;
  const url = `https://pokeapi.co/api/v2/pokemon/ditto}`;

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
