const User = require("./User");
// Add other required models here
const Playlist = require("./Playlist");
const Song = require("./Song");

// Add associations
User.hasMany(Playlist, {
  foreignKey: "user_id",
});

Playlist.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

Playlist.hasMany(Song, {
  foreignKey: "playlist_id",
});

Song.belongsTo(Playlist, {
  foreignKey: "playlist_id",
  onDelete: "SET NULL",
});

Song.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

// Add other models to export
module.exports = { User, Playlist, Song };
