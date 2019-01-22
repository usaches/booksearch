const bookRoutes = require("./books");
const googleRoutes = require("./google");
const path = require("path");
const router = require("express").Router();

router.use("/books", bookRoutes);
router.use("/google", googleRoutes);
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
