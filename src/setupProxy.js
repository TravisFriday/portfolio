const proxy = require("http-proxy-middleware");

/*
module.exports = function(app) {
  app.use(proxy("/api", { target: "http://localhost:8001/" }));
};
*/
module.exports = function(app) {
  app.use(
    proxy("/latest/api", {
      target: "https://mfc2xycfk2.execute-api.us-west-2.amazonaws.com/"
    })
  );
};
