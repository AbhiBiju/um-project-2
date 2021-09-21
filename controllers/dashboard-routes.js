const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Location } = require("../models");
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

// This is for location
// router.get("/location", withAuth, (req, res) => {
//   User.findAll({
//     // where: users are within 20mi of current user(center) (first 3 numbers match? : 33.2 +-2, -55.1+-2)
//     // {{#each}}user.latitude = currentUser.latitude[33.2+-2]
//     // {{#each}}user.longitude = currentUser.longitude[33.2+-2]
//     // need to add a currentUser id like we did with manager id
//     attributes: [
//       'id',
//       'zip_code'
//     ],
//     include: [
//       {
//         model: Location,
//         attributes: ['id', 'latitude', 'longitude', 'user_id']
//       }
//     ]
//   })
//   res.render("location", {
//     loggedIn: true
//   });
// });

module.exports = router;
