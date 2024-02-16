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

const updateAjob = async ({ id, title, description, location }) => {
    console.log(id);
    const postingJob = await dataBase('jobs')
        .where({ id })
        .update({ title, description, location })
        .returning('*');
    return postingJob;
};

const fetchPostingById = async id => {
    const posting = await dataBase('jobs').where({ id }).first();
    return posting;
};

module.exports = {
    insertAJob,
    updateAjob,
    fetchPostingById,
};
