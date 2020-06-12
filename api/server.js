const express = require("express");
const server = express();
const cors = require("cors");
const user = require('../users/user-router.js')

server.use(express.json());
server.use(cors());

server.use('/', user)

module.exports = server