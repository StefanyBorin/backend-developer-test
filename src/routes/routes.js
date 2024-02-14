const { Router } = require('express');

const routesCompanies = require('./routesCompanies')

const routes = Router();

routes.use(routesCompanies);

module.exports = routes;
