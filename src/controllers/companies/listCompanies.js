const { searchByCompanies } = require('../../repositories/companies');

const listCompanies = async (req, res) => {
    try {
        const companies = await searchByCompanies();
        return res.status(200).json(companies);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Internal Server Error' });
    }
};

module.exports = listCompanies;
