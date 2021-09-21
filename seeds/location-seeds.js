const sequelize = require("../config/connection");
// Add other required models to this existing const
const { Location } = require("../models");

// Add dummyData
const locationdata = [
    {
        latitude: '27.87986',
        longitude: '-82.75092',
        zIndex: 4,
        user_id: '1'
    },
    {
        latitude: '27.87986',
        longitude: '-82.75092',
        zIndex: 5,
        user_id: '2'
    },
    {
        latitude: '27.87986',
        longitude: '-82.75092',
        zIndex: 3,
        user_id: '3'
    },
    {
        latitude: '27.87986',
        longitude: '-82.75092',
        zIndex: 2,
        user_id: '4'
    },
    {
        latitude: '27.87986',
        longitude: '-82.75092',
        zIndex: 1,
        user_id: '5'
    },
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;