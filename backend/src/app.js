require('dotenv/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const router = require('./router');

app.use(cors());

app.use(router);

app.use(bodyParser.json());

app.disable('x-powered-by');

module.exports = app;
