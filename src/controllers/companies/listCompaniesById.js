const { searchCompanyById } = require('../../repositories/companies');

const listCompaniesById = async (req, res) => {
    const { company_id } = req.params;
    try {
        const company = await searchCompanyById(company_id);
        if (!company) {
            return res.status(400).json({ mensagem: 'Company does not exist' });
        }
        return res.status(200).json(company);
    } catch (error) {
        if (
            error.message.includes(
                'sintaxe de entrada é inválida para tipo uuid',
            )
        ) {
            return res.status(400).json({ mensagem: 'Company does not exist' });
        }
        return res.status(500).json({ mensagem: 'Internal Server Error' });
    }
};

module.exports = listCompaniesById;
