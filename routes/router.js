const express = require("express");
const router = express.Router();
const todo = require("./todoRouter");
const user = require("./userRoute")
const auth = require("./authRouter")



router.use("/todo", todo);
router.use("/users", user)
router.use("/auth", auth)


module.exports = router;