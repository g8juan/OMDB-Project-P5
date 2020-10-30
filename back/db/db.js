const S = require('sequelize');
const User = require('./User');
// const Favorites = require('./Favorite');

const db = new S('postgres://localhost:5432/omdb', {
  logging: false
});

// User.hasMany(Favorite)

module.exports = db