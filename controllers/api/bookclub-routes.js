const router = require("express").Router();
const sequelize = require("../../config/connection");
const { User, Post, Book, BookClub, BookClubMember } = require("../../models");
const withAuth = require("../../utils/auth");

// get all users
router.get("/", (req, res) => {
  console.log("======================");
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
    .then((dbBookClubData) => res.json(dbBookClubData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
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
    .then((dbBookClubData) => {
      if (!dbBookClubData) {
        res.status(404).json({ message: "No club found with this id" });
        return;
      }
      res.json(dbBookClubData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", withAuth, (req, res) => {
  // expects {'Taskmaster goes public!', content: 'https://taskmaster.com/press', user_id: 1}
  BookClub.create({
    name: req.body.name,
    genre: req.body.genre,
    description: req.body.description,
    owner_id: req.session.user_id,
  })
    .then((dbBookClubData) => res.json(dbBookClubData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/join", withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', content: 'https://taskmaster.com/press', user_id: 1}
  BookClubMember.create({
    bookclub_id: req.body.club_id,
    user_id: req.session.user_id,
  })
    .then((dbBookClubData) => res.json(dbBookClubData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", withAuth, (req, res) => {
  BookClub.update(
    {
      name: req.body.name,
      genre: req.body.genre,
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbBookClubData) => {
      if (!dbBookClubData) {
        res.status(404).json({ message: "No club found with this id" });
        return;
      }
      res.json(dbBookClubData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", withAuth, (req, res) => {
  console.log("id", req.params.id);
  BookClub.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbBookClubData) => {
      if (!dbBookClubData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbBookClubData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
