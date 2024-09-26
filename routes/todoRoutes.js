const express = require('express');
const { addTodo, getTodos } = require('../controllers/todoController');
const router = express.Router();

router.post('/add', addTodo);
router.get('/todos', getTodos);

module.exports = router;
