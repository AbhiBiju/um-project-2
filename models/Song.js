const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create user model
class Song extends Model {}

// Create fields and columns for User model here
Song.init(
  {
    // Need to add hooks
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    artist: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    playlist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "playlist",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "song",
  }
);

module.exports = Song;
