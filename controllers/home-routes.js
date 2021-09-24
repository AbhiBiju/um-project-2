const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote, Book, BookClub, BookClubMember} = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    attributes: ["id", "book_name", "book_author", "price", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
    order: [["id", "DESC"]],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get("/posts/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "book_name", "book_author", "price", "content", "created_at"],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single book
router.get("/books/:id", (req, res) => {
  Book.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "author",
      "created_at",
      [sequelize.literal("(SELECT COUNT(*) FROM vote WHERE book.id = vote.book_id)"), "vote_count"],
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render("single-book", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single club
router.get("/bookclubs/:id", (req, res) => {
  BookClub.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ["id", "name", "genre", "description", "owner_id", "created_at"],
    include: [
      {
        model: User,
        as: "owner",
        attributes: ["username"],
      },
      {
        model: User,
        as: "members",
        attributes: ["username"],
        through: BookClubMember,
      },
    ],
  })
    .then((dbClubData) => {
      if (!dbClubData) {
        res.status(404).json({ message: "No club found with this id" });
        return;
      }

      const club = dbClubData.get({ plain: true });

      res.render("single-club", {
        club,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get("/club", (req, res) => {
  BookClub.findAll({
    attributes: ["id", "name", "genre", "description", "owner_id", "created_at"],
    include: [
      {
        model: User,
        as: "owner",
        attributes: ["id", "username"],
      },
      {
        model: User,
        attributes: ["id", "username"],
        as: "members",
        through: BookClubMember,
      },
    ],
  })
    .then((dbClubData) => {
      if (!dbClubData) {
        res.status(404).json({ message: "No clubs found" });
        return;
      }

      const clubs = dbClubData.map((club) => club.get({ plain: true }));

      res.render("club", {
        clubs,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/create-club", (req, res) => {
  BookClub.findAll({
    attributes: ["id", "name", "genre", "description", "owner_id", "created_at"],
    include: [
      {
        model: User,
        as: "owner",
        attributes: ["id", "username"],
      },
      {
        model: User,
        attributes: ["id", "username"],
        as: "members",
        through: BookClubMember,
      },
    ],
  })
    .then((dbClubData) => {
      if (!dbClubData) {
        res.status(404).json({ message: "No clubs found" });
        return;
      }

      const clubs = dbClubData.map((club) => club.get({ plain: true }));

      res.render("create-club", {
        clubs,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/profile", (req, res) => {
  BookClub.findAll({
    attributes: ["id", "name", "genre", "description", "owner_id", "created_at"],
    include: [
      {
        model: User,
        as: "owner",
        attributes: ["id", "username"],
      },
      {
        model: User,
        attributes: ["id", "username"],
        as: "members",
        through: BookClubMember,
      },
    ],
  })
    .then((dbClubData) => {
      if (!dbClubData) {
        res.status(404).json({ message: "No clubs found" });
        return;
      }

      const clubs = dbClubData.map((club) => club.get({ plain: true }));

      res.render("club", {
        clubs,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

router.get("/location", (req, res) => {
  res.render("location");
});
module.exports = router;
