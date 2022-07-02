require("dotenv").config();
const express = require("express");
require("./db/postgres");
const cors = require("cors");
const port = process.env.PORT || 5555;
const server = express();
const accountRouter = require("./routes/account");
server.use(cors());
server.use(express.json());
server.use("/api", accountRouter);
server.listen(port, () => {
	console.log(`Server is up and listening on ${port}`);
});
