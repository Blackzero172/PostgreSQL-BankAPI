const { Pool } = require("pg");
const pool = new Pool({
	user: process.env.PGUSER,
	host: process.env.PGHOST,
	database: process.env.PGDATABASE,
	password: process.env.PGPASSWORD,
});
pool
	.connect()
	.then(() => {
		console.log("Connected to DB");
	})
	.catch((e) => {
		console.log("DB Connection Failed");
	});
