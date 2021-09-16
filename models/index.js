const User = require('./User');
const Playlist = require('./Playlist');
// Add other required models here


// Add associations
User.hasMany(Playlist, {
    foreignKey: 'user_id'
});

Playlist.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


// Add other models to export
module.exports = { User, Playlist };