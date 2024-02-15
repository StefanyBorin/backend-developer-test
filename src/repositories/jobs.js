const dataBase = require('../setting/knex');

const insertAJob = async ({
    company_id,
    title,
    description,
    location,
    notes,
    status,
}) => {
    const [job] = await dataBase('jobs')
        .insert({
            company_id,
            title,
            description,
            location,
            notes,
            status,
        })
        .returning('*');
    return job;
};

module.exports = insertAJob;
