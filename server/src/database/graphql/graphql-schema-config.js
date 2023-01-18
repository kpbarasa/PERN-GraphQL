
const { newPost, update_post, delPost, newAuthor, update_author, delAuthor} = require('./graphql-repository-functions');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql');
// SCHEMAS
// const posts = require('./graphql-books-schemas')
// const authors = require('./graphql-author-schemas')

const authors = [
  { author_id: 1, author_name: 'J. K. Rowling', author_age: 10,author_type:"a", author_email:"eamil@email.com" },
  { author_id: 2, author_name: 'J. R. R. Tolkien', author_age: 10,author_type:"b", author_email:"eamil@email1.com"  },
  { author_id: 3, author_name: 'Brent Weeks',  author_age: 10,author_type:"a", author_email:"eamil@email2.com"  }
]

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

const PostType = new GraphQLObjectType({  // Graph QL object  POSTS
  name: 'posts',
  description: 'This represents a POST  by an author',
  fields: () => ({
    post_id: { type: new GraphQLNonNull(GraphQLInt) },
    post_type: { type: new GraphQLNonNull(GraphQLString) },
    post_title: { type: new GraphQLNonNull(GraphQLString) },
    post_description: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLString) },
    author_id: { type: new GraphQLNonNull(GraphQLString) },
    posts: {   //return all authors of author
      type: AuthorType,
      resolve: async (post) => {
        const data =  authors.find((author => author.author_id === post.author_id))
        return data
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  description: 'This represents a author of a Post',
  fields: () => ({
    author_id: { type: new GraphQLNonNull(GraphQLInt) },
    author_name: { type: new GraphQLNonNull(GraphQLString) },
    author_age: { type: new GraphQLNonNull(GraphQLInt) },
    author_type: { type: new GraphQLNonNull(GraphQLString) },
    author_email: { type: new GraphQLNonNull(GraphQLString) },
    authors: {
      type: new GraphQLList(PostType),
      resolve: (author) => {
        return posts.filter(post => post.author_id === author.author_id)
      }
    }
  })
})

//   ROOT query to define all graphQl Objects
const RootQueryType = new GraphQLObjectType({

  name: 'Query',
  description: 'Root Query',

  fields: () => ({

    post: {
      type: PostType,
      description: 'A Single Post',
      args: {
        post_id: { type: GraphQLInt }
      },
      resolve: (parent, args) => posts.find(post => post.post_id === args.post_id)
    },
    posts: {
      type: new GraphQLList(PostType),
      description: 'List of All Posts',
      resolve: () => posts
    },

    authors: {
      type: new GraphQLList(AuthorType),
      description: 'List of All Authors',
      resolve: () => authors
    },
    author: {
      type: AuthorType,
      description: 'A Single Author',
      args: {
        author_id: { type: GraphQLInt }
      },
      resolve: (parent, args) => authors.find(author => author.author_id === args.author_id)
    }
  })
});

//   ROOT query to define all graphQl Objects CRUD OPERATIONS
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addPost: {
      type: PostType,
      description: 'Add new post',
      args: {
        post_type: { type: new GraphQLNonNull(GraphQLString) },
        post_title: { type: new GraphQLNonNull(GraphQLString) },
        post_description: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        author_id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (parent, args) => {

        const data = { 
          post_id: posts.length + 1, 
          post_type: args.post_type, 
          post_title: args.post_title, 
          post_description: args.post_description, 
          date: args.date, 
          author_id: args.author_id 
        }

        const newBPostdb = await newPost(
          data.post_id,
          data.post_type,
          data.post_title,
          data.post_description,
          data.date,
          data.author_id
        )

        return newBPostdb

      }
    },
    updatePosts: {
      type: PostType,
      description: 'Update posts',
      args: {
        post_type: { type: new GraphQLNonNull(GraphQLString) },
        post_title: { type: new GraphQLNonNull(GraphQLString) },
        post_description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        const data = { post_type: args.post_type, post_title: args.post_title, post_description: args.post_description }

        const updtData_db = await update_post(
          data.post_type,
          data.post_title,
          data.post_description
        )

        return updtData_db

      }
    },
    deletePost: {
      type: PostType,
      description: 'Delete post',
      args: {
        post_id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (parent, args) => {
        const data = { post_id: args.post_id }

        const updateData_db = await delPost(
          data.post_id
        )

        return updateData_db

      }
    },
    addAuthor: {
      type: AuthorType,
      description: 'Add Author',
      args: {
        author_name: { type: new GraphQLNonNull(GraphQLString) },
        author_age: { type: new GraphQLNonNull(GraphQLInt) },
        author_type: { type: new GraphQLNonNull(GraphQLString) },
        author_email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {
        const data = { 
          author_id: authors.length + 1,
          author_name: args.author_name, 
          author_age: args.author_age, 
          author_type: args.author_type, 
          author_email: args.author_email, 
          author_id: args.author_id }

        const newBPostdb = await newAuthor(
          data.author_name,
          data.author_age,
          data.author_type,
          data.author_email,
          data.author_id,
        )

        return newBPostdb

      }
    },
    updateAuthor: {
      type: AuthorType,
      description: 'Update posts',
      args: {
        author_name: { type: new GraphQLNonNull(GraphQLString) },
        author_age: { type: new GraphQLNonNull(GraphQLInt) },
        author_type: { type: new GraphQLNonNull(GraphQLString) },
        author_email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: async (parent, args) => {

        const data = { 
          author_name: args.author_name, 
          author_age: args.author_age, 
          author_type: args.author_type, 
          author_email: args.author_email
        }

        const updtData_db = await update_post(
          data.post_type,
          data.post_title,
          data.post_description
        )

        return updtData_db

      }
    },
    deleteAuthor: {
      type: AuthorType,
      description: 'Delete post',
      args: {
        post_id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (parent, args) => {
        const data = { post_id: args.post_id }

        const updateData_db = await delPost(
          data.post_id
        )

        return updateData_db

      }
    }
  })
});

module.exports = { PostType, AuthorType, RootQueryType, RootMutationType };