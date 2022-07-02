const { insertQuery, updateQuery } = require("./utils/utils");

const createAccount = async (req, res) => {
	try {
		await insertQuery(req.body);
		res.send("Inserted Item Successfuly");
	} catch (e) {
		res.status(500).send(error);
	}
};
const updateAccount = async (req, res) => {
	try {
		const account = await updateQuery(req.body.field, req.body.amount, req.body.id);
		if (!account) return res.status(404).send("Account not Found");
		res.send(account);
	} catch (e) {
		res.status(500).send(e.message);
	}
};
module.exports = { createAccount, updateAccount };
