const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// Create user model
class Book extends Model {}

// Create fields and columns for User model here
Book.init(
  {
    // Need to add hooks
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    // price: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   validate: {
    //     isNumeric: true,
    //   },
    // },
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
    modelName: "book",
  }
);

module.exports = Book;
