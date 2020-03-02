const express = require('express');
const tasksRouter  = express.Router();
const Task = require("../models/Task")

  tasksRouter.get('/tasks', (req, res, next) => {
    Task.find()
    .then(allTasks => res.json(allTasks))
    .catch(err => console.log(err))
  })

  tasksRouter.post('/new', (req, res, next) => {
    const { title, description, date, user } = req.body;
    Task
      .create({ title, description, date, user })
      .then((newTask) => {
        Task
          .findById(newTask._id)
          .then(theNewTask => res.json(theNewTask))
          .catch(error => next(error))
      })
      .catch(error => next(error))
  });

module.exports = tasksRouter;