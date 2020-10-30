const S = require('sequelize')
const db = require("./db");

class Favorites extends S.Model {}

Favorites.init({
    movieKey: {
        type: S.STRING,
        allowNull: false,
        unique: true
    }
},{sequelize : db, modelName: 'favorites', timestamps: false})

module.exports = Favorites