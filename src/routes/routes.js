const { Router } = require('express');

const routesCompanies = require('./routesCompanies');
const routesJobs = require('./routesJobs');

const routes = Router();

routes.use(routesCompanies);
routes.use(routesJobs)

module.exports = routes;
