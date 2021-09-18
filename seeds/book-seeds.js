const sequelize = require("../config/connection");
// Add other required models to this existing const
const { Book } = require("../models");

// Add dummyData
const bookdata = [
  {
    title: "Barrows Inc",
    author: "Khalil O'Hearn",
    price: "15.03",
    user_id: 3,
  },
  {
    title: "Runolfsdottir-Kulas",
    author: "Bel Meeson",
    price: "19.26",
    user_id: 3,
  },
  {
    title: "Gleason-Weber",
    author: "Niels Lasslett",
    price: "8.00",
    user_id: 1,
  },
  {
    title: "Altenwerth, Beahan and Kilback",
    author: "Tessie Schwaiger",
    price: "13.86",
    user_id: 1,
  },
  {
    title: "Mertz-Balistreri",
    author: "Johann Bowdon",
    price: "18.09",
    user_id: 1,
  },
  {
    title: "Hirthe, Bins and Farrell",
    author: "Cornall Buzek",
    price: "12.36",
    user_id: 1,
  },
  {
    title: "Jones LLC",
    author: "Hinda Dekeyser",
    price: "10.64",
    user_id: 2,
  },
  {
    title: "Feil-Daniel",
    author: "Sara-ann Sutlieff",
    price: "14.76",
    user_id: 2,
  },
  {
    title: "Swaniawski-Schmidt",
    author: "Thurston Bearblock",
    price: "9.70",
    user_id: 1,
  },
  {
    title: "Boyle Group",
    author: "Loria Pert",
    price: "12.53",
    user_id: 2,
  },
];

// Need User.bulkcreate method
const seedBooks = () => Book.bulkCreate(bookdata);


module.exports = seedBooks;
