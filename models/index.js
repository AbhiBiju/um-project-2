const User = require("./User");
// Add other required models here
const Post = require("./Post");
const Book = require("./Book");
const BookClub = require("./BookClub");
const BookClubMember = require("./BookClubMember");

// Add associations
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasMany(Book, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasOne(BookClub, {
  foreignKey: "owner_id",
});

User.belongsToMany(BookClub, {
  through: BookClubMember,
  foreignKey: "user_id",
});

User.belongsToMany(BookClub, {
  through: BookClubMember,
  // foreignKey: "bookclub_id",
});

// Add other models to export
module.exports = { User, Post, Book, BookClub, BookClubMember };
