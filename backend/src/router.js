const express = require('express');
const routes = express.Router();
const generateRandomId = require('./utils/generateRandomId');

routes.get('/', (req, res) => {
    const id = generateRandomId();
    res.json({
        id,
    });
});

module.exports = routes;
