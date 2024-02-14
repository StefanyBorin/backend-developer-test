const { Router } = require('express');

const listCompanies = require('../controllers/companies/listCompanies');
const listCompaniesById = require('../controllers/companies/listCompaniesById');

const routesCompanies = Router();

routesCompanies.get('/companies', listCompanies);
routesCompanies.get('/companies/:company_id', listCompaniesById);

module.exports = routesCompanies;
