const seedUsers = require("./user-seeds.js");
const seedPosts = require("./post-seeds.js");
const seedBooks = require("./book-seeds.js");
const seedBookClubs = require("./bookclub-seeds.js");
const seedBookClubMembers = require("./bookclubmember-seeds.js");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n--------------\n");

  await seedUsers();
  console.log("\n--------------\n");

  await seedBooks();
  console.log("\n--------------\n");

  await seedPosts();
  console.log("\n--------------\n");

  await seedBookClubs();
  console.log("\n--------------\n");

  await seedBookClubMembers();
  console.log("\n--------------\n");

  process.exit(0);
};

seedAll();
