const express = require('express');
const usersRouter  = express.Router();
const User = require("../models/User")

usersRouter.get('/users', (req, res, next) => {
    User.find()
    .then(allUsers => res.json(allUsers))
    .catch(err => console.log(err))
  })

  usersRouter.post('/newUser', (req, res, next) => {
    const { name } = req.body;
    User
      .create({ name })
      .then((newUser) => {
        User
          .findById(newUser._id)
          .then(theNewUser => res.json(theNewUser))
          .catch(error => next(error))
      })
      .catch(error => next(error))
  });

module.exports = usersRouter;