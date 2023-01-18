
const pool = require('../postgres/db')

const getData= async () => {

	const author_tb = await pool.query("SELECT * FROM author_tb")

	return author_tb.rows

}

module.exports = getData;