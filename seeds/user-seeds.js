const sequelize = require('../config/connection');
// Add other required models to this existing const
const { User } = require('../models');

// Add dummyData
const userdata = [
    // userName, email, password
    {},
]



// Need User.bulkcreate method

module.exports = seedUsers;