const express = require('express');

const OngController = require('./controllers/OngControllers');
const ProfileController = require('./controllers/ProfileController')
const IncidentController = require('./controllers/IncidentControllers');
const Sessioncontroller = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', Sessioncontroller.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;