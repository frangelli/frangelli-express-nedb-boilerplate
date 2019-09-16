const hello = require("./hello-world");
module.exports = function(app) {
  app.post("/hello", hello.hello);
};
