const AWS = require("aws-sdk");

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ID,
	secretAccessKey: process.env.AWS_SECRET,
});

const uploadFile = async (fileName, data) => {
	const params = {
		Bucket: process.env.BUCKET_NAME,
		Key: fileName,
		Body: data,
	};

	return new Promise((resolve, reject) => {
		s3.upload(params, (error, data) => {
			if (error) {
				return reject(err);
			}
			return resolve(data);
		});
	});
};

module.exports = uploadFile;
