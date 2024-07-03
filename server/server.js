const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

const k8scontroller = require('./controllers/k8scontroller');

app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.get('/getPods', k8scontroller.getPods, (req, res) => {
  console.log('RESULT: ', JSON.stringify(res.locals.result));
  return res.status(200).json(res.locals.result);
});

app.use((err, req, res, next) => {
  console.log('ERROR: ', err);
  return res.status(500).json(err);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
