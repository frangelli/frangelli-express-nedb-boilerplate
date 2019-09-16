const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;

//configure static
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "../node_modules")));

//configure ne database
const db = require("./database");

//configure express middlewares
app.use(bodyParser.json());

//configure routes
const routes = require("./routes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
