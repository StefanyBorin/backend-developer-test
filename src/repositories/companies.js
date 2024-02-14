const dataBase = require('../setting/knex');

const searchByCompanies = async () => {
    const existCompanies = await dataBase('companies');
    return existCompanies;
};

const searchCompanyById = async id => {
    const companies = await dataBase('companies').where({ id }).first();
    return companies;
};

module.exports = {
    searchByCompanies,
    searchCompanyById,
};
