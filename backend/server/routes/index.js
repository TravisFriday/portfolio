const blogController = require("../controllers").blog;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  //POST Blog
  app.post("/api/blog", blogController.create);
  // GET list of all items
  app.get("/api/blog", blogController.list);
  // GET a single blog by ID
  app.get("/api/blog/:blogId", blogController.retrieve);
  // UPDATE a single blog by ID
  app.put("/api/blog/:blogId", blogController.update);
  // DELETE a single blog by ID
  app.delete("/api/blog/:blogId", blogController.delete);
};
