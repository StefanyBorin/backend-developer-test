const { s3, params } = require('../../setting/awsS3');

const feedPublishJobs = async (req, res) => {
    try {
        const searchObjectS3 = await s3.getObject(params).promise();
        const { Body } = searchObjectS3;
        if (!Body) {
            res.status(400).json({ message: 'Error em buscar feed' });
        }
        const jsonFormat = JSON.parse(searchObjectS3.Body.toString());

        return res.status(200).json(jsonFormat);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json('error server');
    }
};

module.exports = feedPublishJobs;
