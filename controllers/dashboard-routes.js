const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote, Book, BookClub, BookClubMember } = require("../models");
const withAuth = require("../utils/auth");

// get all posts for dashboard
router.get("/", withAuth, (req, res) => {
  console.log(req.session);
  console.log("======================");
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Post,
        attributes: ["id", "title", "book_name", "book_author", "price", "content", "created_at"],
      },
      {
        model: Comment,
        attributes: ["id", "comment_text", "created_at"],
        include: {
          model: Post,
          attributes: ["title"],
        },
      },
      {
        model: Post,
        attributes: ["book_name"],
        through: Vote,
        as: "voted_books",
      },
      {
        model: Book,
        attributes: ["id", "title", "author", "price", "created_at", ],
      },
      {
        model: BookClub,
        as: "started_clubs",
        attributes: ["name", "genre", "description", "owner_id"],
      },
      {
        model: BookClub,
        attributes: ["name", "owner_id"],
        as: "joined_clubs",
        through: BookClubMember,
      },
    ],
  }).then((dbUserData) => {
    if (!dbUserData) {
      res.status(404).json({ message: "No user found with this id" });
      return;
    }
    res.render(dbUserData);
  });
});

router.get("/edit/:id", withAuth, (req, res) => {
  res.render("edit-post", {
    loggedIn: true,
  });
});

module.exports = router;
