
const pool = require('../postgres/db')

const getData= async () => {

	const test_tb = await pool.query("SELECT * FROM test_tb")

	let test = test_tb.rows

	return test_tb.rows

}

module.exports = getData;