const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create user model
class Playlist extends Model {}

// Create fields and columns for User model here
Playlist.init(
  {
    // Need to add hooks
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    genre: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    modelName: "playlist",
  }
);

module.exports = Playlist;
