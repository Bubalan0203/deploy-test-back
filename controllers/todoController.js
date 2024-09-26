const Todo = require('../models/Todo');

// Add a new todo
exports.addTodo = async (req, res) => {
  const { text, date } = req.body;

  try {
    const newTodo = new Todo({
      text,
      date,
    });

    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error saving todo', error });
  }
};

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};
