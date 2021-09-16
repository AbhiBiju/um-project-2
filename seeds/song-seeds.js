const sequelize = require("../config/connection");
// Add other required models to this existing const
const { Song } = require("../models");

// Add dummyData
const songdata = [
  // title artist playlist_id user_id
  {
    title: "Holdlamis",
    artist: "Dacie Singleton",
    playlist_id: 1,
    user_id: 3,
  },
  {
    title: "Namfix",
    artist: "Bennie Wallworth",
    playlist_id: 2,
    user_id: 3,
  },
  {
    title: "Treeflex",
    artist: "Jed Chant",
    playlist_id: 1,
    user_id: 2,
  },
  {
    title: "Holdlamis",
    artist: "Margie Daniello",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Andalax",
    artist: "Hatty Kennifick",
    playlist_id: 3,
    user_id: 3,
  },
  {
    title: "Tresom",
    artist: "Carolyne Standley",
    playlist_id: 1,
    user_id: 3,
  },
  {
    title: "Bytecard",
    artist: "Lambert Stearnes",
    playlist_id: 1,
    user_id: 2,
  },
  {
    title: "Alpha",
    artist: "Decca Torbard",
    playlist_id: 3,
    user_id: 1,
  },
  {
    title: "Quo Lux",
    artist: "Carlita Seally",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Prodder",
    artist: "Cymbre Ackerman",
    playlist_id: 3,
    user_id: 1,
  },
  {
    title: "Kanlam",
    artist: "Hodge Riddock",
    playlist_id: 3,
    user_id: 3,
  },
  {
    title: "Bitchip",
    artist: "Mano Whate",
    playlist_id: 3,
    user_id: 2,
  },
  {
    title: "Holdlamis",
    artist: "Fonz Loder",
    playlist_id: 2,
    user_id: 1,
  },
  {
    title: "Tempsoft",
    artist: "Ronnie Chicchelli",
    playlist_id: 3,
    user_id: 1,
  },
  {
    title: "Matsoft",
    artist: "Jorie Cobb",
    playlist_id: 2,
    user_id: 1,
  },
  {
    title: "Toughjoyfax",
    artist: "Rodi Coathup",
    playlist_id: 2,
    user_id: 1,
  },
  {
    title: "It",
    artist: "Dolph Patise",
    playlist_id: 2,
    user_id: 1,
  },
  {
    title: "Fintone",
    artist: "Nike Ellgood",
    playlist_id: 2,
    user_id: 1,
  },
  {
    title: "Pannier",
    artist: "Consolata Hundal",
    playlist_id: 2,
    user_id: 2,
  },
  {
    title: "Flowdesk",
    artist: "Vyky Brislan",
    playlist_id: 1,
    user_id: 2,
  },
  {
    title: "Namfix",
    artist: "Jennette Gosz",
    playlist_id: 2,
    user_id: 2,
  },
  {
    title: "Job",
    artist: "Giffer Rawson",
    playlist_id: 3,
    user_id: 3,
  },
  {
    title: "Veribet",
    artist: "Galvin Gravenor",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Veribet",
    artist: "Clea Bickers",
    playlist_id: 3,
    user_id: 2,
  },
  {
    title: "Keylex",
    artist: "Winnie Epperson",
    playlist_id: 3,
    user_id: 1,
  },
  {
    title: "Alphazap",
    artist: "Vasily McGurgan",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Y-Solowarm",
    artist: "Lona McBrearty",
    playlist_id: 3,
    user_id: 1,
  },
  {
    title: "Daltfresh",
    artist: "Boothe Pidgeley",
    playlist_id: 1,
    user_id: 2,
  },
  {
    title: "Voltsillam",
    artist: "Arte Gemmill",
    playlist_id: 3,
    user_id: 3,
  },
  {
    title: "Overhold",
    artist: "Ardene Orans",
    playlist_id: 1,
    user_id: 3,
  },
  {
    title: "Job",
    artist: "Carole Coye",
    playlist_id: 3,
    user_id: 3,
  },
  {
    title: "Alpha",
    artist: "Edin Shayes",
    playlist_id: 3,
    user_id: 3,
  },
  {
    title: "Redhold",
    artist: "Leela Erat",
    playlist_id: 1,
    user_id: 3,
  },
  {
    title: "Holdlamis",
    artist: "Jerad Beardsell",
    playlist_id: 3,
    user_id: 1,
  },
  {
    title: "Y-Solowarm",
    artist: "Taylor Pretsel",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Domainer",
    artist: "Ive Buss",
    playlist_id: 1,
    user_id: 3,
  },
  {
    title: "Cardify",
    artist: "Odell Cummings",
    playlist_id: 1,
    user_id: 2,
  },
  {
    title: "Y-Solowarm",
    artist: "Genni Mertgen",
    playlist_id: 2,
    user_id: 2,
  },
  {
    title: "Konklab",
    artist: "Nevins Jozsika",
    playlist_id: 3,
    user_id: 2,
  },
  {
    title: "Cardify",
    artist: "Gabriello Oloman",
    playlist_id: 3,
    user_id: 2,
  },
  {
    title: "Bitwolf",
    artist: "Christopher Brasseur",
    playlist_id: 2,
    user_id: 2,
  },
  {
    title: "Bigtax",
    artist: "Cully Stouther",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Cardguard",
    artist: "Melinde Gatheral",
    playlist_id: 1,
    user_id: 3,
  },
  {
    title: "Transcof",
    artist: "Chane Pugh",
    playlist_id: 3,
    user_id: 1,
  },
  {
    title: "Home Ing",
    artist: "Maura MacDunlevy",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Pannier",
    artist: "Rex Abramowitch",
    playlist_id: 2,
    user_id: 2,
  },
  {
    title: "Cardify",
    artist: "Lillian D'Ambrogi",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Fintone",
    artist: "Zechariah Hepher",
    playlist_id: 1,
    user_id: 1,
  },
  {
    title: "Voltsillam",
    artist: "Guthrey Ring",
    playlist_id: 1,
    user_id: 3,
  },
  {
    title: "Hatity",
    artist: "Timoteo Henriquet",
    playlist_id: 1,
    user_id: 2,
  },
];

// Need User.bulkcreate method
const seedSongs = () => Song.bulkCreate(songdata);


module.exports = seedSongs;
