const sequelize = require("../config/connection");
// Add other required models to this existing const
const { Book } = require("../models");

// Add dummyData
const bookdata = [
  {
        author: "Khalil O'Hearn",
    price: "15.03",
    user_id: 3,
  },
  {
        author: "Bel Meeson",
    price: "19.26",
    user_id: 3,
  },
  {
        author: "Niels Lasslett",
    price: "8.00",
    user_id: 1,
  },
  {
        author: "Tessie Schwaiger",
    price: "13.86",
    user_id: 1,
  },
  {
        author: "Johann Bowdon",
    price: "18.09",
    user_id: 1,
  },
  {
        author: "Cornall Buzek",
    price: "12.36",
    user_id: 1,
  },
  {
        author: "Hinda Dekeyser",
    price: "10.64",
    user_id: 2,
  },
  {
        author: "Sara-ann Sutlieff",
    price: "14.76",
    user_id: 2,
  },
  {
        author: "Thurston Bearblock",
    price: "9.70",
    user_id: 1,
  },
  {
        author: "Loria Pert",
    price: "12.53",
    user_id: 2,
  },
];

// Need User.bulkcreate method
const seedBooks = () => Book.bulkCreate(bookdata);


module.exports = seedBooks;
