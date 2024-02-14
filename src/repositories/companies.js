const dataBase = require('../setting/knex');

const searchByCompanies = async () => {
    const existCompanies = await dataBase('companies');
    return existCompanies;
};

module.exports = { searchByCompanies };
