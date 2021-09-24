const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const bookRoutes = require("./book-routes");
const bookclubRoutes = require("./bookclub-routes");
const commentRoutes = require("./comment-routes");
const locationRoutes = require("./location-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/books", bookRoutes);
router.use("/bookclubs", bookclubRoutes);
router.use("/comments", commentRoutes);
router.use("/location", locationRoutes);

module.exports = router;
