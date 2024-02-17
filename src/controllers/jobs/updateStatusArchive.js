const {
    editStatusPosting,
    fetchPostingById,
} = require('../../repositories/jobs');

const updateStatusArchive = async (req, res) => {
    const { job_id } = req.params;
    const statusArchive = 'archived';
    try {
        const postingExist = await fetchPostingById(job_id);

        if (!postingExist) {
            return res.status(400).json({ mensagem: 'Posting does not exist' });
        }

        const { status } = postingExist;

        if (status.toLowerCase() === statusArchive.toLowerCase()) {
            return res.status(400).json({ message: 'Job already archived' });
        }

        const newStatus = await editStatusPosting({
            id: job_id,
            status: statusArchive,
        });

        return res.status(201).json(newStatus[0]);
    } catch (error) {
        if (
            error.message.includes(
                'sintaxe de entrada é inválida para tipo uuid',
            )
        ) {
            return res.status(400).json({ mensagem: 'Posting does not exist' });
        }
        return res.status(500).json({ mensagem: 'Internal Server Error' });
    }
};

module.exports = updateStatusArchive;
