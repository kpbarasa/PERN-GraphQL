
const pool = require('../postgres/db')

async function newPost(post_id, post_type, post_title, post_description, author_id) {

	try {
		// Check if title eists 
		const data_exists = await pool.query("SELECT * FROM post_tb WHERE post_title = $1", [post_title]);

		if (data_exists.rows) throw "Post aready exists"

		const description = [post_id, post_type, post_title, post_description, author_id]

		const data = await pool.query(
			"INSERT INTO post_tb (description) VALUES($1, $2, $3, $4, $5) RETURNING *",
			description
		);

		return data.rows

	} catch (error) {

		console.log(error)

	}

}

async function update_post(post_id, post_type, post_title, post_description) {

	try {
		// Check if title eists 
		const data_exists = await pool.query("SELECT * FROM post_tb WHERE post_id = $1", [post_id]);

		if (!data_exists.rows[0]) throw "Post not found"

		const description = [post_type, post_title, post_description, post_id]

		await pool.query(
			"UPDATE post_tb SET post_type = $1, post_title = $2, post_description = $3 WHERE post_id = $4",
			description
		);

		const data = await pool.query("SELECT * FROM test_tb WHERE test_tb_id = $1", [id]);

		return data.rows[0]

	} catch (error) {

		console.log(error)

	}

}

async function delPost(post_id) {

	try {
		// Check if title eists 
		const data = await pool.query("SELECT * FROM post_tb WHERE post_id = $1", [post_id]);

		if (!data.rows[0]) throw "Post not found"

		await pool.query("DELETE FROM post_tb WHERE post_id = $1", [post_id])

		return {
			post_id: data.id,
			author_id: data.author_id,
			post_type: data.post_type,
			post_title: data.post_title,
			post_description: data.post_description,
			status: "Deleted"
		}

	} catch (error) {

		console.log(error)

	}

}

async function newAuthor(author_name, author_age, author_type, author_email) {

	try {
		// Check if title eists 
		const data_exists = await pool.query("SELECT * FROM author_tb WHERE author_email = $1", [author_email]);

		if (data_exists.rows) throw "Author aready exists"

		const description = [author_name, author_age, author_type, author_email]

		const data = await pool.query(
			"INSERT INTO author_tb (description) VALUES($1, $2, $3, $4) RETURNING *",
			description
		);

		return data.rows

	} catch (error) {

		console.log(error)

	}

}

async function update_author(author_name, author_age, author_type, author_email, author_id) {

	try {
		// Check if title eists 
		const data_exists = await pool.query("SELECT * FROM author_tb WHERE author_id = $1", [author_id]);

		if (!data_exists.rows[0]) throw "Author not found"

		const description = [author_name, author_age, author_type, author_email]

		await pool.query(
			"UPDATE author_tb SET author_name = $1, author_age = $2, author_type = $3, author_email = $3 WHERE author_id = $4",
			description
		);

		const data = await pool.query("SELECT * FROM author_tb WHERE author_id = $1", [id]);

		return data.rows[0]

	} catch (error) {

		console.log(error)

	}

}

async function delAuthor(author_id) {

	try {
		// Check if title eists 
		const data = await pool.query("SELECT * FROM author_tb WHERE author_id = $1", [author_id]);

		if (!data.rows[0]) throw "Author not found"

		await pool.query("DELETE FROM author_tb WHERE author_id = $1", [author_id])

		return {
			author_id: data.author_id,
			author_name: data.author_name,
			author_age: data.author_age,
			author_type: data.author_type,
			author_email: data.author_email,
			status: "Deleted"
		}

	} catch (error) {

		console.log(error)

	}

}


module.exports = { newPost, update_post, delPost, newAuthor, update_author, delAuthor };