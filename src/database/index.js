const Datastore = require("nedb");
// const db = new Datastore({ filename: "./db/database.db", autoload: true });
const db = new Datastore({ autoload: true });
module.exports = db;
