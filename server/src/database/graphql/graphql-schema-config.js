
const { newPost, update_post, delPost, newAuthor, update_author, delAuthor } = require('./');
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLNonNull } = require('graphql');
const { graphQlSchemas } = require('./')
const { filterList } = require('../../utils')
// SCHEMAS
// const posts = require('./graphql-books-schemas')
// const authors = require('./graphql-author-schemas')

const graphql_schema = new graphQlSchemas;
const posts = graphql_schema.postData();
const dashBoardData = graphql_schema.dashData();
const authors = graphql_schema.autherData();

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
        const data = await authors.find((author => author.author_id === post.author_id))
        return data
      }
    },
    filter_posts_id: {   //return all authors of author
      type: new GraphQLList(PostType),
      resolve: async (post) => {
        const data = await posts.filter((post => post.date === post.author_id))
        return data
      }
    }
  })
});

const DashDataType = new GraphQLObjectType({  // Graph QL object  POSTS
  name: 'dashboard_data',
  description: 'This represents dashboard data',
  fields: () => ({

    posts_no: { type: new GraphQLNonNull(GraphQLInt) },
    datatype_no: { type: new GraphQLNonNull(GraphQLInt) },
    authors: { type: new GraphQLNonNull(GraphQLInt) },
    repository_info: {
      type: new GraphQLList(DashDataType),
      resolve: async () => dashBoardData.dashData
    },

    cat0: { type: new GraphQLNonNull(GraphQLInt) },
    cat1: { type: new GraphQLNonNull(GraphQLInt) },
    cat2: { type: new GraphQLNonNull(GraphQLInt) },
    cat3: { type: new GraphQLNonNull(GraphQLInt) },
    cat4: { type: new GraphQLNonNull(GraphQLInt) },
    cat5: { type: new GraphQLNonNull(GraphQLInt) },
    repository_categories_info: {
      type: new GraphQLList(DashDataType),
      resolve: async () => dashBoardData.data_categories
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
      resolve: async (author) => {
        // console.log(posts);
        return await posts.filter(post => post.author_id === author.author_id)
      }
    }
  })
})

//   ROOT query to define all graphQl Objects
const RootQueryType = new GraphQLObjectType({

  name: 'Query',
  description: 'Root Query',

  fields: () => ({

    dashboard_data: {
      type: new GraphQLList(DashDataType),
      description: 'Dashboard data',
      resolve: () => dashBoardData.dashData
    },

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

    filter_posts: {
      type: new GraphQLList(PostType),
      description: 'List of All Author Posts',
      args: {
        post_type: { type: GraphQLString },
        post_cat: { type: GraphQLString }
      },
      resolve: (parent, args) => filterList(args.post_type, args.post_cat, posts)
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
    },

    delPost: {
      type: PostType,
      description: 'Delete post',
      args: {
        post_id: { type: GraphQLInt }
      },
      resolve: (parent, args) => posts.find(post => post.post_id === args.post_id)
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
      description: 'Add Author',
      args: {
        post_type: { type: new GraphQLNonNull(GraphQLString) },
        post_title: { type: new GraphQLNonNull(GraphQLString) },
        post_description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {

        const date = new Date()
        const author_id = 3

        const data = { post_type: args.post_type, post_title: args.post_title, post_description: args.post_description, date: date, author_id: author_id }


        // const newBPostdb = await newPost(
        //   data.post_type,
        //   data.post_title,
        //   data.post_description,
        //   book.date,
        //   data.author_id
        // )

        // return newBPostdb
        return data

      }
    },
    updatePosts: {
      type: PostType,
      description: 'Update posts',
      args: {
        post_id: { type: new GraphQLNonNull(GraphQLInt) },
        post_type: { type: new GraphQLNonNull(GraphQLString) },
        post_title: { type: new GraphQLNonNull(GraphQLString) },
        post_description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        const data = { post_id: args.post_id, post_title: args.post_title, post_type: args.post_type, post_description: args.post_description }

        // const updtData_db = await update_post(
        //   data.post_id,
        //   data.post_type,
        //   data.post_title,
        //   data.post_description
        // )

        return data;

      }
    },
    deletePost: {
      type: PostType,
      description: 'Delete post',
      args: {
        post_id: { type: GraphQLInt }
      },
      resolve: async (parent, args) => {
        const data = { post_id: args.post_id }
        // const updateData_db = await delPost(
        //   data.post_id
        // )

        return data

      }
    },
    deleteAuthor: {
      type: AuthorType,
      description: 'Delete author',
      args: {
        author_id: { type: GraphQLInt }
      },
      resolve: async (parent, args) => {
        const data = { author_id: args.author_id }
        // const updateData_db = await delAuthor(
        //   data.post_id
        // )

        return data

      }
    }
  })
});

module.exports = { PostType, AuthorType, RootQueryType, RootMutationType };