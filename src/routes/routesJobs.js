const { Router } = require('express');

const createAJobs = require('../controllers/jobs/createAJob');

const validateSchema = require('../middleware/validateSchema');

const schemaJob = require('../validations/schemaJob');

const routesJobs = Router();

routesJobs.post('/job', validateSchema(schemaJob), createAJobs);

module.exports = routesJobs;
