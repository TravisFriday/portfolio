const express = require("express");
const router = express.Router();
const blogRoute = require("./blog");

router.use("/blog", blogRoute);
//router.use("/product", productRoute);

module.exports = router;
