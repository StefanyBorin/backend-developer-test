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

const removeJobPosting = async id => {
    const removeDataBase = await dataBase('jobs').where({ id }).del();
    return removeDataBase;
};

const editStatusPosting = async ({ id, status }) => {
    const edit = await dataBase('jobs')
        .where({ id })
        .update({ status })
        .returning('*');
    return edit;
};

module.exports = {
    insertAJob,
    updateAjob,
    fetchPostingById,
    removeJobPosting,
    editStatusPosting,
};
