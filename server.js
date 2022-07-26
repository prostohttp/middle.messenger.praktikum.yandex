const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));
const index = path.join(__dirname, "/dist/index.html");
app.use("/*", (_, res) => {
	res.sendFile(index);
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
