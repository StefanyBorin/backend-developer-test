const { Router } = require('express');

const validateSchema = require('../middleware/validateSchema');
const schemaJob = require('../validations/schemaJob');
const schemaPostUpdate = require('../validations/schemaPostUpdate');

const createAJobs = require('../controllers/jobs/createAJob');
const updatePostingJob = require('../controllers/jobs/updatePostingJob');
const deletePostingJob = require('../controllers/jobs/deletePostingJob');
const updateStatusPublish = require('../controllers/jobs/updateStatusPublish');
const updateStatusArchive = require('../controllers/jobs/updateStatusArchive');

const routesJobs = Router();

routesJobs.post('/job', validateSchema(schemaJob), createAJobs);
routesJobs.put(
    '/job/:job_id',
    validateSchema(schemaPostUpdate),
    updatePostingJob,
);
routesJobs.delete('/job/:job_id', deletePostingJob);
routesJobs.put('/job/:job_id/publish', updateStatusPublish);
routesJobs.put('/job/:job_id/archive', updateStatusArchive)

module.exports = routesJobs;
