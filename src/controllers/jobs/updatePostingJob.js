const { updateAjob, fetchPostingById } = require('../../repositories/jobs');

const updatePostingJob = async (req, res) => {
    const { title, description, location } = req.body;
    const { job_id } = req.params;

    try {
        const postingExist = await fetchPostingById(job_id);

        if (!postingExist) {
            return res.status(400).json({ mensagem: 'Posting does not exist' });
        }
        await updateAjob({
            id: job_id,
            title,
            description,
            location,
        });

        return res.status(201).json({
            message: 'Data updated successfully',
        });
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

module.exports = updatePostingJob;
