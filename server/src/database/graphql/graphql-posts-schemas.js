
const pool = require('../postgres/db')

const getData= async () => {

	const post_tb = await pool.query("SELECT * FROM post_tb")

	return post_tb.rows

}

module.exports = getData;