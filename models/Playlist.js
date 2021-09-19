const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Playlist extends Model {};

// Need to add more columns after server side API created.

Playlist.init(
    {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        song_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: Datatype.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },

    }
);

module.exports = Playlist;