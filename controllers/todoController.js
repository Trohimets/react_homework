import { Todos } from '../models/todos.js';

export class TodoController {
	static async getAllTodos(req, res) {
		const allTodos = await Todos.getAllTodos();

		res.status(200).send(allTodos);
	}

	static async createTodo(req, res) {
		console.log(req.body)
		const { title, description } = req.body;

		if (!description || !title) {
			res.status(400).send({ message: 'Не переданы обязательные поля' });
		}
		await Todos.createTodos(title, description)
		res.status(200).send('Запись добавлена');
	}

	static async patchTodoById(req, res) {
		console.log(req.body)
		const { title, description, completed, tag_id } = req.body;
		try{
			if (!description && !title && !completed && !tag_id ) {
				res.status(400).send({ message: 'Не переданы обязательные поля' });
			}
			const updatedTodo = await Todos.findByIdAndUpdate(todoId, { title, description }, { new: true });
			if (!updatedTodo) {
				return res.status(404).send({ message: 'Todo не найден' });
			  }
			res.status(200).json(updatedTodo);
		} catch (err) {
		res.status(500).send({ message: err.message });
	  	}
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
