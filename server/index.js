const tasks = require("./routes/tasks");
const cors = require("cors");
const express = require("express");
require('dotenv').config();
var bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./db')
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/tasks", tasks);

app.listen(process.env.PORT, () => {
    sequelize.sync();
});