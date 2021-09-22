const User = require('./User');
// Add other required models here
const Post = require("./Post");
const Book = require("./Book");
const BookClub = require("./BookClub");
const BookClubMember = require("./BookClubMember");
const Location = require("./Location");

// Add associations
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// ------------------------

User.hasMany(Location, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Location.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// ------------------------

User.hasMany(Book, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// ------------------------

User.belongsToMany(BookClub, {
  through: BookClubMember,
  as: "joined_clubs",

  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasOne(BookClub, {
  foreignKey: "owner_id",
  as: "started_clubs",
  onDelete: "SET NULL",
});

// ------------------------

BookClub.belongsToMany(User, {
  through: BookClubMember,
  as: "members",

  foreignKey: "bookclub_id",
  onDelete: "SET NULL",
});

BookClub.belongsTo(User, {
  as: "owner",
  
  foreignKey: "owner_id",
  onDelete: "SET NULL",
});

// Add other models to export
module.exports = { User, Post, Book, BookClub, BookClubMember };
