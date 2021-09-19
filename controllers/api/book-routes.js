const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Post, Book, BookClub, BookClubMember } = require("../../models");
const withAuth = require("../../utils/auth");

// get all books
router.get("/", (req, res) => {
  console.log("======================");
  Book.findAll({
    attributes: ["id", "title", "author", "price", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "title", "author", "price", "created_at"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No book found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects: {"title", "author", "price", "user_id"},
  Book.create({
    title: req.body.title,
    author: req.body.author,
    price: req.body.price,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* //commented out incase needed later
router.put("/upvote", withAuth, (req, res) => {
  // custom static method created in models/Post.js
  Book.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
    .then((updatedVoteData) => res.json(updatedVoteData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
 */

router.put("/:id", withAuth, (req, res) => {
  Book.update(
    {
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No book found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  Book.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
