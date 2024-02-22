const {
    removeJobPosting,
    fetchPostingById,
} = require('../../repositories/jobs');

const deletePostingJob = async (req, res) => {
    const { job_id } = req.params;
    try {
        const postingExist = await fetchPostingById(job_id);

        if (!postingExist) {
            return res.status(400).json({ mensagem: 'Posting does not exist' });
        }

        const removingAPost = await removeJobPosting(job_id);

        if (!removingAPost) {
            return res.status(400).json({ mensagem: 'Error deleting post' });
        }

        return res.status(200).json({ message: 'Successfully deleted post' });
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

module.exports = deletePostingJob;
