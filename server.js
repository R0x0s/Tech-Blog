const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connnection");
//Before I forget
const app = express();

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const exphbs = require("express-handlebars");


require("dotenv").config();