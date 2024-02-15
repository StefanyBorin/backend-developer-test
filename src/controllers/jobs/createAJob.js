const { searchCompanyById } = require('../../repositories/companies');
const insertAJob = require('../../repositories/jobs');

const createAJob = async (req, res) => {
    const { company_id, title, description, location, notes, status } =
        req.body;
    try {
        const company = await searchCompanyById(company_id);
        if (!company) {
            return res.status(400).json({ mensagem: 'Company does not exist' });
        }
        const jobPosting = await insertAJob({
            company_id,
            title,
            description,
            location,
            notes,
            status,
        });
        return res.status(201).json(jobPosting);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ mensagem: 'Internal Server Error' });
    }
};

module.exports = createAJob;
