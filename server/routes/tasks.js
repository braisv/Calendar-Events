const express = require("express");
const tasksRouter = express.Router();
const Task = require("../models/Task");
const User = require("../models/User");

tasksRouter.get("/data", (req, res, next) => {
  let data = {
    tasks: [],
    users: []
  }
  Task.find()
    .then(allTasks => {
      data.tasks = allTasks

      User.find()
      .then(allUsers => {
        data.users = allUsers
        res.json(data)
      })
    })
    .catch(err => console.log(err));
});

tasksRouter.get("/tasks", (req, res, next) => {
  Task.find()
    .then(allTasks => res.json(allTasks))
    .catch(err => console.log(err));
});

tasksRouter.post("/newTask", (req, res, next) => {
  const { title, description, user, date } = req.body;
  Task.create({ title, description, user, date })
    .then(newTask => {
      Task.findById(newTask._id)
        .then(theNewTask => res.json(theNewTask))
        .catch(error => next(error));
    })
    .catch(error => next(error));
});

tasksRouter.patch("/edit/:id", (req, res, next) => {
  const { title, description, user, date } = req.body;
  const taskID = req.params.id;
  User.findByIdAndUpdate(
    { _id: taskID },
    { $set: { title, description, user, date } },
    { new: true }
  )
    .then(theUser => res.json(theUser))
    .catch(error => next(error));
});

tasksRouter.delete("/remove/:id", (req, res, next) => {
  const taskID = req.params.id;
  task
    .findByIdAndRemove({ _id: taskID })
    .then(theTask => {
      res.json(theTask);
    })
    .catch(error => next(error));
});

module.exports = tasksRouter;
