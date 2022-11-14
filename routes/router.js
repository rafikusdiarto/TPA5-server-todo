const express = require("express");
const router = express.Router();
const todo = require("./todoRouter");
const user = require("./userRoute")



router.use("/todo", todo);
router.use("/user", user)


module.exports = router;