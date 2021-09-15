const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Create user model
class USER extends Model {
    // Need method to check pw
}

// Create fields and columns for User model here
User.init(
    // Need to add hooks
)


module.exports = User;