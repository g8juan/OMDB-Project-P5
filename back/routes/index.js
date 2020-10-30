const express = require('express')
const User = require('../db/User')
const Favorite = require('../db/Favorite')
const passport = require('passport')

const router = express()

router.post('/register', (req, res) => {
    User.create(req.body).then((user => res.status(200).send(user)))
})

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/home')
})

router.post('/favorite/add', (req, res) => {
    Favorite.create(req.body).then( favorite => res.status(200).send(favorite))
})


module.exports = router