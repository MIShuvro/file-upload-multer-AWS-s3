const Route = require("express").Router();
const upload = require("../service/multer");

const uploadFile = require("../service/s3");

const { v1 } = require("uuid");
Route.post("/upload", upload, async (req, res) => {
	var fileName = v1() + "-" + req.file.originalname.split(" ").join("-");
	const response = await uploadFile(fileName, req.file.buffer);
	res.send(response);
});

module.exports = Route;
