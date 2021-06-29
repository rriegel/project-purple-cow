const express = require('express');
const path = require('path');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.static('dist'));

const url = "https://api.countapi.xyz/hit/rriegel-purple-cow/1ccb732e-b55a-4404-ad3f-0f99c02fe44e"

app.get('/hits', (req, res) => {
  console.log('got a hit request')
  axios.get(url)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => { res.sendStatus(404)});
});

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});