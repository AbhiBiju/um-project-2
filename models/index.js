const User = require("./User");
// Add other required models here
const Post = require("./Post");
const Book = require("./Book");
const BookClub = require("./BookClub");
const BookClubMember = require("./BookClubMember");

// Add associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

User.hasMany(Book, {
  foreignKey: "user_id",
});

User.hasMany(BookClub, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Book.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

BookClub.belongsTo(User, {
  foreignKey: "owner_id",
  onDelete: "SET NULL",
});

User.belongsTo(BookClub, {
  through: BookClubMember,
  foreignKey: "user_id",
});

BookClubMember.hasMany(BookClub, {
  through: BookClubMember,
  foreignKey: "bookclub_id",
  onDelete: "SET NULL",
});

// Add other models to export
module.exports = { User, Playlist, Song };
