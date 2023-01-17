
const pool = require('../postgres/db')

async function newData(description) {

	try {
		// Check if title eists 
		const data_exists = await pool.query("SELECT * FROM test_tb WHERE description = $1", [description]);

		if (data_exists.rows) throw "Book aready exists"

		const description = [description]

		const data = await pool.query(
			"INSERT INTO test_tb (description) VALUES($1) RETURNING *",
			description
		);

		return data.rows

	} catch (error) {

		console.log(error)

	}

}

async function updtData(id, description) {

	try {
		// Check if title eists 
		const data_exists = await pool.query("SELECT * FROM test_tb WHERE id = $1", [id]);

		if (!data_exists.rows[0]) throw "Book not found"

		const description = [description]

		await pool.query(
			"UPDATE test_tb SET book_title = $1",
			description
		);

		const data = await pool.query("SELECT * FROM test_tb WHERE id = $1", [id]);

		return data.rows[0]

	} catch (error) {

		console.log(error)

	}

}

async function delData(id) {

	try {
		// Check if title eists 
		const data = await pool.query("SELECT * FROM test_tb WHERE id = $1", [id]);

		if (!data.rows[0]) throw "Book not found"

		await pool.query("DELETE FROM books_tb WHERE book_id = $1", [book_id])

		return {
			id: data.id,
			description: data.description,
			status: "Deleted"
		}

	} catch (error) {

		console.log(error)

	}

}


module.exports = { newData, updtData, delData };