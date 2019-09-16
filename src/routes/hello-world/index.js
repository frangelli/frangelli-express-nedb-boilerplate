const db = require("../../database");
exports.hello = function(req, res) {
  const doc = {
    hello: "world"
  };
  db.insert(doc, (err, newDoc) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send(newDoc);
  });
};
