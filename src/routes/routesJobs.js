const { Router } = require('express');

const createAJobs = require('../controllers/jobs/createAJob');

const validateSchema = require('../middleware/validateSchema');

const schemaJob = require('../validations/schemaJob');
const schemaPostUpdate = require('../validations/schemaPostUpdate');
const updatePostingJob = require('../controllers/jobs/updatePostingJob');

const routesJobs = Router();

routesJobs.post('/job', validateSchema(schemaJob), createAJobs);
routesJobs.put(
    '/job/:job_id',
    validateSchema(schemaPostUpdate),
    updatePostingJob,
);

module.exports = routesJobs;
