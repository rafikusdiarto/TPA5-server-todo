const express = require("express");
const app = express();
const allRouter = require("./routes/router");
require('./config/config.json')

const PORT = 4040;

app.use(express.json());

app.use(allRouter);

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});


module.exports = app;