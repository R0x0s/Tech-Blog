const path = require("path");
const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connnection");

const app = express();
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);