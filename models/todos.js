import { pool } from '../database/index.js';

export class Todos {
	static async getAllTodos() {
		const allTodosDBResponse = await pool.query('select * from todos', []);

		return allTodosDBResponse.rows;
	}

	static async createTodo(title, description, completed, tagsId) {
		pool.query('insert into todos(title, description, completed, tags_id) values($1, $2, $3, $4)', [
			title,
			description,
			completed,
			tagsId,
		]);
	}

	static async deleteTodoById(id) {
		try {
			const findedTodosDBResponse = await pool.query('select * from todos where id = $1', [id]);
			if (findedTodosDBResponse.rowCount === 0) {
				throw new Error();
			}
			await pool.query('delete from todos where id = $1', [id]);
			return;
		} catch (e) {
			throw new Error('Ошибка удаления');
		}
	}
}
