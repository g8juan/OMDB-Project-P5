const S = require('sequelize')
const db = require("./db");
const bcrypt = require('bcrypt')

class User extends S.Model {}

User.init({
    email: {
        type: S.STRING,
        allowNull: false
    },
    password: {
        type: S.STRING,
        allowNull: false
    },
    salt: {
        type: S.STRING,
      }
},{sequelize : db, modelName: 'user', timestamps: false})

User.beforeCreate(function (user) {
    return bcrypt.genSalt(16)
        .then((salt) => {
            user.salt = salt
            return user.hashPassword(user.password, salt)
        })
        .then((hash) => {
            user.password = hash;
        });
});

User.prototype.hashPassword = function (password) {
    return bcrypt.hash(password, this.dataValues.salt)
}

User.prototype.validPassword = function (password) {
    return this.hashPassword(password)
    .then(hash => { return this.password === hash })
}

module.exports = User