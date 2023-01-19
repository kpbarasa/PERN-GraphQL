
const pool = require('../postgres/db')

class graphQlSchemas {

	 postData() {

		// const post_tb = await pool.query("SELECT * FROM post_tb")

		// return post_tb.rows

		const posts = [
		  { post_id: 1, post_type:"a", post_title: 'Harry Potter and the Chamber of Secrets', post_description:"Description", author_id: 1 },
		  { post_id: 2, post_type:"b", post_title: 'Harry Potter and the Prisoner of Azkaban', post_description:"Description", author_id: 1 },
		  { post_id: 3, post_type:"c", post_title: 'Harry Potter and the Goblet of Fire', post_description:"Description", author_id: 1 },
		  { post_id: 4, post_type:"a", post_title: 'The Fellowship of the Ring', post_description:"Description", author_id: 2 },
		  { post_id: 5, post_type:"b", post_title: 'The Two Towers', post_description:"Description", author_id: 2 },
		  { post_id: 6, post_type:"b", post_title: 'The Return of the King', post_description:"Description", author_id: 2 },
		  { post_id: 7, post_type:"c", post_title: 'The Way of Shadows', post_description:"Description", author_id: 3 },
		  { post_id: 8, post_type:"a", post_title: 'Beyond the Shadows', post_description:"Description", author_id: 3 }
		]
		return posts

	}

	autherData() {

		// const author_tb = await pool.query("SELECT * FROM author_tb")

		// return author_tb.rows

		const authors = [
		  { author_id: 1, author_name: 'J. K. Rowling', author_age: 10,author_type:"a", author_email:"eamil@email.com" },
		  { author_id: 2, author_name: 'J. R. R. Tolkien', author_age: 10,author_type:"b", author_email:"eamil@email1.com"  },
		  { author_id: 3, author_name: 'Brent Weeks',  author_age: 10,author_type:"a", author_email:"eamil@email2.com"  }
		]
		return authors

	}

}

module.exports = graphQlSchemas;