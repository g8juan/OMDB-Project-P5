const express = require("express");
const morgan = require('morgan')
const routes = require('./routes/index')
const cors = require('cors')
const db = require('./db/db')
const User = require('./db/User')
const passport = require('passport')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require("cookie-parser");

const app = express();

//MIDDLEWARES
app.use(cors())
app.use(express.static(__dirname + "/public"))
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

  // PASSPORT //
  app.use(session({ secret: "omdb" }))
  app.use(passport.initialize());
  app.use(passport.session());

passport.use( new LocalStrategy ( {usernameField: 'email'},
  function(username, password, done) {
    User.findOne({where:{ email: username }})
      .then(user => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user)
      })
      .catch(done)
  }
))

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id)
  .then(user => done(null, user))
  .catch(done)
});

app.use('/api', routes)

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

db.sync({force:false})
  .then(() => app.listen(3000, () => {
    console.log("OMDB Active!");
    }))
  .catch(err => err)
