const AWS = require('aws-sdk');

const conexao = require('knex')({
    client: process.env.BD_CLIENTE,
    connection: {
        host: process.env.BD_HOST,
        port: process.env.BD_PORT,
        user: process.env.BD_USER,
        password: process.env.BD_PASS,
        database: process.env.BD_NAME,
    },
});

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID_CLIENT,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_CLIENT,
    region: process.env.REGION_AWS,
});

const handler = async event => {
    try {
        const jobsPublish = await conexao()
            .select('jobs.*', 'companies.name as company_name')
            .from('jobs')
            .leftJoin('companies', 'companies.id', 'jobs.company_id')
            .where({ status: 'published' });

        const jobs = jobsPublish.map(
            ({ id, title, description, created_at, company_name }) => {
                return {
                    id,
                    title,
                    description,
                    created_at,
                    company_name,
                };
            },
        );
        const s3 = new AWS.S3();

        const params = {
            Bucket: process.env.NAME_BUCKET,
            Key: process.env.KEY_BUCKET,
            Body: JSON.stringify(jobs),
        };
        await s3.putObject(params).promise();

        return { statusCode: 200, body: 'Bucket updated successfully!' };
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Error updating Bucket.',
        };
    }
};

module.exports = handler;
