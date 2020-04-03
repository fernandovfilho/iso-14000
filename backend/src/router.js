const express = require('express');
const routes = express.Router();
const activitiesController = require('../src/controllers/activitiesController');

routes.get('/activities', activitiesController.index);
routes.post('/activities', activitiesController.store);

module.exports = routes;
