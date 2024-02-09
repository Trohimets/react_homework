import express from 'express';
import { todoRouter } from './routes/todoRouter.js';
import bodyParser from 'body-parser';

const server = express();

server.use('/todos', todoRouter);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.json())
server.listen(9500, () => {
	console.log('listening on port 9500');
});

// GET /todos/ - получение списка тодо
// POST /todos/ - создание тодошки   { todoId: 1, title: 'новое название' }
// PATCH /todos - изменение задачи
// DELETE /todos - удаление
