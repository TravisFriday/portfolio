const express = require("express");
const router = express.Router();
const db = require("../../db");

//Gets all Blog records
router.get("/", function(req, res) {
  db.select()
    .from("tfportfolio.blog")
    .orderBy("blog_id")
    .then(data => {
      res.send(data);
    });
});

//Gets Blog with a specific id
router.get("/:id", (req, res) => {
  db("tfportfolio.blog")
    .where({ blog_id: req.params.id })
    .first()
    .then(data => {
      res.send(data);
    });
});

module.exports = router;
