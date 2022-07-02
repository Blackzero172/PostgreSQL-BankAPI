const express = require("express");
const { createAccount, updateAccount } = require("../controllers/account");
const accountRouter = express.Router();

accountRouter.post("/accounts", createAccount);
accountRouter.put("/accounts", updateAccount);
module.exports = accountRouter;
