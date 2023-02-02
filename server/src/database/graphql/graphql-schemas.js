
const pool = require('../postgres/db')

class graphQlSchemas {

	postData() {

		// const post_tb = await pool.query("SELECT * FROM post_tb")

		// return post_tb.rows

		const posts = [
			{ post_id: 1, post_type: "a", post_cat: "a", date: "01/01/2023", post_title: 'Harry Potter and the Chamber of Secrets', post_description: "Description", author_id: 1 },
			{ post_id: 2, post_type: "b", post_cat: "b", date: "03/01/2023", post_title: 'Harry Potter and the Prisoner of Azkaban', post_description: "Description", author_id: 1 },
			{ post_id: 3, post_type: "c", post_cat: "b", date: "14/01/2023", post_title: 'Harry Potter and the Goblet of Fire', post_description: "Description", author_id: 1 },
			{ post_id: 4, post_type: "a", post_cat: "n", date: "16/01/2023", post_title: 'The Fellowship of the Ring', post_description: "Description", author_id: 2 },
			{ post_id: 5, post_type: "b", post_cat: "n", date: "17/01/2023", post_title: 'The Two Towers', post_description: "Description", author_id: 2 },
			{ post_id: 6, post_type: "b", post_cat: "n", date: "18/01/2023", post_title: 'The Return of the King', post_description: "Description", author_id: 2 },
			{ post_id: 7, post_type: "c", post_cat: "n", date: "19/01/2023", post_title: 'The Way of Shadows', post_description: "Description", author_id: 3 },
			{ post_id: 9, post_type: "a", post_cat: "m", date: "13/01/2023", post_title: 'Beyond the Shadows', post_description: "Description", author_id: 3 },
			{ post_id: 10, post_type: "b", post_cat: "m", date: "13/01/2023", post_title: '	The Black Prism (Lightbringer, #1)', post_description: "Description", author_id: 3 },
			{ post_id: 11, post_type: "c", post_cat: "m", date: "13/01/2023", post_title: 'J. R. R. Tolkien', post_description: "Description", author_id: 2 },
			{ post_id: 12, post_type: "d", post_cat: "m", date: "13/01/2023", post_title: 'J. R. R. Tolkien', post_description: "Description", author_id: 2 },
			{ post_id: 13, post_type: "d", post_cat: "m", date: "13/01/2023", post_title: 'Tales from the Perilous Realm', post_description: "Description", author_id: 2 },
			{ post_id: 14, post_type: "b", post_cat: "d", date: "22/01/2023", post_title: 'The Children of Húrin', post_description: "Description", author_id: 2 },
			{ post_id: 16, post_type: "r", post_cat: "d", date: "22/01/2023", post_title: 'Philosopher’s Stone', post_description: "Description", author_id: 1 },
			{ post_id: 17, post_type: "r", post_cat: "d", date: "13/01/2023", post_title: 'Prisoner of Azkaban', post_description: "Description", author_id: 1 },
			{ post_id: 18, post_type: "r", post_cat: "d", date: "13/01/2023", post_title: 'Order of the Phoenix', post_description: "Description", author_id: 1 },
			{ post_id: 19, post_type: "g", post_cat: "d", date: "23/01/2023", post_title: 'Beyond the Shadows (Night Angel, #3)', post_description: "Description", author_id: 3 },
			{ post_id: 20, post_type: "g", post_cat: "d", date: "13/01/2023", post_title: 'Half-Blood Prince', post_description: "Description", author_id: 1 },
			{ post_id: 21, post_type: "a", post_cat: "a", date: "23/01/2023", post_title: 'The Broken Eye (Lightbringer, #3)', post_description: "Description", author_id: 3 },
			{ post_id: 22, post_type: "b", post_cat: "a", date: "13/01/2023", post_title: 'Deathly Hallows', post_description: "Description", author_id: 1 },
			{ post_id: 23, post_type: "d", post_cat: "a", date: "24/01/2023", post_title: 'The Burning White (Lightbringer, #5)', post_description: "Description", author_id: 1 },
			{ post_id: 24, post_type: "b", post_cat: "a", date: "30/01/2023", post_title: 'The Blood Mirror (Lightbringer, #4)', post_description: "Description", author_id: 3 },
			{ post_id: 25, post_type: "b", post_cat: "a", date: "13/01/2023", post_title: 'Lightbringer Series Brent Weeks Collection Bundle', post_description: "Description", author_id: 3 }
		]

		return posts

	}

	postData() {

		// const post_tb = await pool.query("SELECT * FROM post_tb")

		// return post_tb.rows

		const posts = [
			{ post_id: 1, post_type: "a", post_cat: "a", date: "01/01/2023", post_title: 'Harry Potter and the Chamber of Secrets', post_description: "Description", author_id: 1 },
			{ post_id: 2, post_type: "b", post_cat: "b", date: "03/01/2023", post_title: 'Harry Potter and the Prisoner of Azkaban', post_description: "Description", author_id: 1 },
			{ post_id: 3, post_type: "c", post_cat: "b", date: "14/01/2023", post_title: 'Harry Potter and the Goblet of Fire', post_description: "Description", author_id: 1 },
			{ post_id: 4, post_type: "a", post_cat: "n", date: "16/01/2023", post_title: 'The Fellowship of the Ring', post_description: "Description", author_id: 2 },
			{ post_id: 5, post_type: "b", post_cat: "n", date: "17/01/2023", post_title: 'The Two Towers', post_description: "Description", author_id: 2 },
			{ post_id: 6, post_type: "b", post_cat: "n", date: "18/01/2023", post_title: 'The Return of the King', post_description: "Description", author_id: 2 },
			{ post_id: 7, post_type: "c", post_cat: "n", date: "19/01/2023", post_title: 'The Way of Shadows', post_description: "Description", author_id: 3 },
			{ post_id: 9, post_type: "a", post_cat: "m", date: "13/01/2023", post_title: 'Beyond the Shadows', post_description: "Description", author_id: 3 },
			{ post_id: 10, post_type: "b", post_cat: "m", date: "13/01/2023", post_title: '	The Black Prism (Lightbringer, #1)', post_description: "Description", author_id: 3 },
			{ post_id: 11, post_type: "c", post_cat: "m", date: "13/01/2023", post_title: 'J. R. R. Tolkien', post_description: "Description", author_id: 2 },
			{ post_id: 12, post_type: "d", post_cat: "m", date: "13/01/2023", post_title: 'J. R. R. Tolkien', post_description: "Description", author_id: 2 },
			{ post_id: 13, post_type: "d", post_cat: "m", date: "13/01/2023", post_title: 'Tales from the Perilous Realm', post_description: "Description", author_id: 2 },
			{ post_id: 14, post_type: "b", post_cat: "d", date: "22/01/2023", post_title: 'The Children of Húrin', post_description: "Description", author_id: 2 },
			{ post_id: 16, post_type: "r", post_cat: "d", date: "22/01/2023", post_title: 'Philosopher’s Stone', post_description: "Description", author_id: 1 },
			{ post_id: 17, post_type: "r", post_cat: "d", date: "13/01/2023", post_title: 'Prisoner of Azkaban', post_description: "Description", author_id: 1 },
			{ post_id: 18, post_type: "r", post_cat: "d", date: "13/01/2023", post_title: 'Order of the Phoenix', post_description: "Description", author_id: 1 },
			{ post_id: 19, post_type: "g", post_cat: "d", date: "23/01/2023", post_title: 'Beyond the Shadows (Night Angel, #3)', post_description: "Description", author_id: 3 },
			{ post_id: 20, post_type: "g", post_cat: "d", date: "13/01/2023", post_title: 'Half-Blood Prince', post_description: "Description", author_id: 1 },
			{ post_id: 21, post_type: "a", post_cat: "a", date: "23/01/2023", post_title: 'The Broken Eye (Lightbringer, #3)', post_description: "Description", author_id: 3 },
			{ post_id: 22, post_type: "b", post_cat: "a", date: "13/01/2023", post_title: 'Deathly Hallows', post_description: "Description", author_id: 1 },
			{ post_id: 23, post_type: "d", post_cat: "a", date: "24/01/2023", post_title: 'The Burning White (Lightbringer, #5)', post_description: "Description", author_id: 1 },
			{ post_id: 24, post_type: "b", post_cat: "a", date: "30/01/2023", post_title: 'The Blood Mirror (Lightbringer, #4)', post_description: "Description", author_id: 3 },
			{ post_id: 25, post_type: "b", post_cat: "a", date: "13/01/2023", post_title: 'Lightbringer Series Brent Weeks Collection Bundle', post_description: "Description", author_id: 3 }
		]

		return posts

	}

	autherData() {

		// const author_tb = await pool.query("SELECT * FROM author_tb")

		// return author_tb.rows

		const authors = [
			{ author_id: 1, author_name: 'J. K. Rowling', author_age: 10, author_type: "a", author_email: "eamil@email.com" },
			{ author_id: 2, author_name: 'J. R. R. Tolkien', author_age: 10, author_type: "b", author_email: "eamil@email1.com" },
			{ author_id: 3, author_name: 'Brent Weeks', author_age: 10, author_type: "a", author_email: "eamil@email2.com" }
		]

		return authors

	}

	userPrefData() {

		// const author_tb = await pool.query("SELECT * FROM author_tb")

		// return author_tb.rows

		const authors = [
			{ user_id: 1, author_name: 'J. K. Rowlin', author_age: 10, author_type: "b", author_email: "eamil@email1.com" },
			{ user_id: 2, author_name: 'J. R. R. Tolkien', author_age: 10, author_type: "b", author_email: "eamil@email1.com" },
			{ user_id: 3, author_name: 'Brent Weeks', author_age: 10, author_type: "a", author_email: "eamil@email2.com" }
		]
		return authors

	}

	dashData() {

		const dashData = [
			{ posts_no: 112, datatype_no: 111, authors: 111 }
		]

		const data_categories = [
			{cat0: 0 , cat1: 0 ,  cat2: 0 ,  cat3: 0 ,  cat4: 0 ,  cat5: 0 }
		]

		return {dashData, data_categories}
	}

}

module.exports = graphQlSchemas;