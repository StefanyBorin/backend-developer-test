//const AWS = require('aws-sdk');

// const endpoint = new Endpoint(process.env.KEY_ENDPOINT_BUKET);
// const s3 = new S3({
//     endpoint,
//     credentials:{

//     }
// });

// const awsConfig = AWS.config.update({
//   accessKeyId: 'AKIASXCHX3RGFF2HA2DK',
//   secretAccessKey: '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',
//   region: 'us-east-1',
// });

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
