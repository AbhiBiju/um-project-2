const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");

  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

// get single post
router.get("/post/:id", (req, res) => {
  res.render("single-post", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/posts", (req, res) => {
  res.render("posts", {
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/sign-up", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("sign-up");
});

module.exports = router;
