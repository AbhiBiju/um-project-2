const sequelize = require("../config/connection");
// Add other required models to this existing const
const { Playlist } = require("../models");

// Add dummyData
const playlistdata = [
  // title totalSongs(opt) genre(opt) user_id
  {
    title: "Biodex",
    genre: "Blues",
    user_id: 3,
  },
  {
    title: "Pannier",
    genre: "Country music",
    user_id: 10,
  },
  {
    title: "Fix San",
    genre: "Country music",
    user_id: 3,
  },
  {
    title: "Zaam-Dox",
    genre: "Electronic dance music",
    user_id: 9,
  },
  {
    title: "Keylex",
    genre: "Musical theatre",
    user_id: 7,
  },
  {
    title: "Lotstring",
    genre: "Alternative rock",
    user_id: 5,
  },
  {
    title: "Cookley",
    genre: "Dubstep",
    user_id: 8,
  },
  {
    title: "Hatity",
    genre: "Country rock",
    user_id: 1,
  },
  {
    title: "Job",
    genre: null,
    user_id: 5,
  },
  {
    title: "Toughjoyfax",
    genre: null,
    user_id: 1,
  },
  {
    title: "Bigtax",
    genre: "Psychedelic music",
    user_id: 2,
  },
  {
    title: "Overhold",
    genre: "Contemporary R&B",
    user_id: 1,
  },
  {
    title: "Tres-Zap",
    genre: null,
    user_id: 3,
  },
  {
    title: "Stringtough",
    genre: "Popular music",
    user_id: 5,
  },
  {
    title: "Tresom",
    genre: "Ska",
    user_id: 5,
  },
];

// Need User.bulkcreate method
const seedPlaylists = () => Playlist.bulkCreate(playlistdata);

module.exports = seedPlaylists;
