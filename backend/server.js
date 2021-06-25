const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

require("./db/mongoose");
const stylistsRoutes = require("./routes/stylists");
const picturesRoutes = require("./routes/pictures");
const usersRoutes = require("./routes/users");

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use("/stylists", stylistsRoutes);
server.use("/pictures", picturesRoutes);
server.use("/users", usersRoutes);

server.listen(8000, () => console.log("Server is started."));
