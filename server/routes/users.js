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

  usersRouter.get('/user/:id', (req, res, next) => {
    const userID = req.params.id
    User
      .findById(userID)
      .then(user => res.json(user))
      .catch(error => next(error))
  });
  
  usersRouter.delete('/remove/:id', (req, res, next) => {
    const userID = req.params.id
    User
      .findByIdAndRemove({ _id : userID })
      .then(theUser => {
        res.json(theUser)
      })
      .catch(error => next(error))
  });
  
  usersRouter.patch('/edit/:id', (req, res, next) => {
      const { name } = req.body;
      const userID = req.params.id
    User
      .findByIdAndUpdate({ _id: userID }, { $set: { name }}, { new: true })
      .then(theUser => res.json(theUser))
      .catch(error => next(error))
  });

module.exports = usersRouter;