const express       = require('express');
const router        = express.Router();
const usersRoutes   = require('./users');
const tasksRoutes   = require('./tasks');

router.use('/', usersRoutes);
router.use('/', tasksRoutes);

module.exports = router;

