const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");

  res.render("dashboard", { loggedIn: true });
});

router.get("/edit/:id", withAuth, (req, res) => {
  res.render("edit-post", {
    loggedIn: true,
  });
});

module.exports = router;
