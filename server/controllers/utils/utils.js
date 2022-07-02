const postgres = require("../../db/postgres");

const insertQuery = async (obj) => {
	const query = {
		text: "INSERT INTO accounts(name,cash,credit) VALUES($1,$2,$3)",
		values: [obj.name, obj.cash || 0, obj.credit || 0],
	};
	try {
		await postgres.query(query);
	} catch (e) {
		console.error(e);
	}
};
const selectQuery = async (id) => {
	const query = {
		text: id ? "SELECT * FROM accounts WHERE id = $1" : "SELECT * FROM accounts",
		values: [id],
	};
	try {
		const { rows } = await postgres.query(query);
		return id ? rows[0] : rows;
	} catch (e) {
		console.error(e);
	}
};
const updateQuery = async (field, amount, id) => {
	if (field !== "cash" && field !== "credit") throw new Error("Invalid Field");
	const query = {
		text: `UPDATE accounts
        SET '$1' = $2
        WHERE id = $3 RETURNING *
        `,
		values: [field, amount, id],
	};
	try {
		const { rows } = await postgres.query(query);
		return rows[0];
	} catch (e) {
		console.error(e);
	}
};
module.exports = { insertQuery, selectQuery, updateQuery };
