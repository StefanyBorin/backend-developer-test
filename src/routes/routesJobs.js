const { Router } = require('express');

const createAJobs = require('../controllers/jobs/createAJob');

const validateSchema = require('../middleware/validateSchema');

const schemaJob = require('../validations/schemaJob');
const schemaPostUpdate = require('../validations/schemaPostUpdate');
const updatePostingJob = require('../controllers/jobs/updatePostingJob');
const deletePostingJob = require('../controllers/jobs/deletePostingJob');

const routesJobs = Router();

routesJobs.post('/job', validateSchema(schemaJob), createAJobs);

routesJobs.put(
    '/job/:job_id',
    validateSchema(schemaPostUpdate),
    updatePostingJob,
);

routesJobs.delete('/job/:job_id', deletePostingJob);

module.exports = routesJobs;
