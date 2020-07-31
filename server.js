require("dotenv/config");
const express = require("express");


const app = express();

app.use(require("./src/route/route"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server running on ${PORT}>>`);
});

