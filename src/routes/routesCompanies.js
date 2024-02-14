const { Router } = require('express');

const listCompanies = require('../controllers/Companies/listCompanies');

const routesCompanies = Router();

routesCompanies.get('/companies', listCompanies);

module.exports = listCompanies;
