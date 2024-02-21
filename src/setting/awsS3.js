const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.ACCESS_KEY_ID_CLIENT,
    secretAccessKey: process.env.SECRET_ACCESS_KEY_CLIENT,
    region: process.env.REGION_AWS,
});

const s3 = new AWS.S3();

const params = {
    Bucket: process.env.NAME_BUCKET,
    Key: process.env.KEY_BUCKET,
};

module.exports = { params, s3 };
