import { Todos } from '../models/todos.js';

export class TodoController {
	static async getAllTodos(req, res) {
		const allTodos = await Todos.getAllTodos();

		res.status(200).send(allTodos);
	}

	static async createTodo(req, res) {
		const { todoId, title } = req.body;

		if (!todoId || !title) {
			res.status(400).send({ message: 'Не переданы обязательные поля' });
		}

		res.status(200).send();
	}

	static async patchTodoById(req, res) {}

	static async deleteTodoById(req, res) {
		const { todoId } = req.params;

		try {
			await Todos.deleteTodoById(todoId);
			res.status(200).end();
		} catch (e) {
			res.status(500).send(e.message);
		}
	}
}
