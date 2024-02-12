import { pool } from '../database/index.js';

export class Todos {
	static async getAllTodos() {
		const allTodosDBResponse = await pool.query('select * from todos', []);

		return allTodosDBResponse.rows;
	}

	static async createTodos(title, description) {
		await pool.query('insert into todos(title, description, completed, tag_id) values($1, $2, false, 1)', [
			title,
			description
		]);
	}

	static async updateTodose(req, res, todoId) {
  		const { title, description, tag_id, completed } = req.body;
		// try {
			const updateQuery = 'UPDATE todos SET title = $1, description = $2, tag_id = $3, completed = $4 WHERE id = $5';
			const values = [title, description, tag_id, completed, todoId];
			const bd = await pool.query(updateQuery, values);
			console.log(bd)
			res.status(200).json({ message: 'Запись обновлена' });
		// } catch (error) {
		// 	res.status(500).json({ error: 'Ошибка при обновлении записи' });
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
