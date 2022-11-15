const express = require("express");
const app = express();
const allRouter = require("./routes/router");
const db = require('./models')
const Role = db.role
const PORT = 4040;
require('./config/config.json')

app.use(express.json());

app.use(allRouter);

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});



db.sequelize.sync()


const auth = require('./routes/router');
app.use('/', auth);


module.exports = app;