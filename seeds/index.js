const seedUsers = require("./user-seeds");
const seedPlaylists = require("./playlist-seeds");
const seedSongs = require("./song-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n--------------\n");

  await seedUsers();
  console.log("\n--------------\n");

  await seedPlaylists();
  console.log("\n--------------\n");

  await seedSongs();
  console.log("\n--------------\n");

  process.exit(0);
};

seedAll();
