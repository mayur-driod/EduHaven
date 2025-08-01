import express from 'express';
import { getAllTodos, getTodoById, createTodo, updateTodo, deleteTodo, recreateDailyHabits } from '../Controller/TodoController.js';
import authMiddleware from '../Middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createTodo);
router.get('/', authMiddleware, getAllTodos);
router.get('/:id', authMiddleware, getTodoById);
router.put('/:id', authMiddleware, updateTodo);
router.delete('/:id', authMiddleware, deleteTodo);
router.post('/recreate-daily-habits', authMiddleware, recreateDailyHabits);

export default router;