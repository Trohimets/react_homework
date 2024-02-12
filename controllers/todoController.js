import { Todos } from '../models/todos.js';

export class TodoController {
	static async getAllTodos(req, res) {
		const allTodos = await Todos.getAllTodos();

		res.status(200).send(allTodos);
	}

	static async createTodo(req, res) {
		const { title, description } = req.body;

		if (!description || !title) {
			res.status(400).send({ message: 'Не переданы обязательные поля' });
		}
		await Todos.createTodos(title, description)
		res.status(200).send('Запись добавлена');
	}

	static async patchTodoById(req, res) {
		const { todoId } = req.params;
		await Todos.updateTodose(req, res, todoId);
	}

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
