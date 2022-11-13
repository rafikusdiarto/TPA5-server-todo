const express = require('express')
const router = express.Router();
const todoController = require('../controllers/todoController.js')


router.get('/all-todo', todoController.readTodo)
router.get('/all-todo/:id', todoController.getTodoByID)
router.post('/all-todo',todoController.createTodo)
router.patch('/all-todo/:id', todoController.updateTodo)
router.delete('/all-todo/:id', todoController.deleteTodo)
router.delete('/all-todo', todoController.deleteAllTodo)
// router.post('/',todo.createTodo)
// router.post('/add-todo', todoController.createTodo)


module.exports = router;