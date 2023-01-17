const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql');

// SCHEMAS
const getData = require('./graphql-books-schemas');
const {newData, updtData, delData } = require('./graphql-repository-functions');

const DataType = new GraphQLObjectType({  // Graph QL object  Books
  name: 'Data',
  description: 'This represents a book written by an author',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    // boo: {   //return all authors of author
    //   type: AuthorType,
    //   resolve: async(book) => {
    //     const data = await (await authors).find((author => author.author_id === book.author_id)) 
    //     return data
    //   }
    // }
  })
});

//   ROOT query to define all graphQl Objects
const RootQueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Root Query',
  fields: () => ({

    data: {  // Graph QL object placeholder Books 
      type: DataType,
      description: 'Single data object',
      args: {
        id: { type: GraphQLInt }
      },
      resolve: async(parent, args) => await (getData).find(data => data.id === args.id)
    },
    allData: {  // Graph QL object placeholder Books List
      type: new GraphQLList(DataType),
      description: 'List of All getData',
      resolve: () => getData
    }
  })
});

//   ROOT query to define all graphQl Objects CRUD OPERATIONS
const RootMutationType = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Root Mutation',
  fields: () => ({
    addData: {
      type: DataType,
      description: 'Add data',
      args: {
        description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        const data = { description: args.description }
        
        const newBData_db = await newData(
          data.description
        )

        return newBData_db

      }
    },
    updateData: {
      type: DataType,
      description: 'Update data',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        description: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: async (parent, args) => {
        const data = { id: args.id, description: args.description }
       
        const updtData_db = await updtData(
           data.id,
            data.description
          )

        return updtData_db

      }
    },
    deleteData: {
      type: DataType,
      description: 'Delete data',
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) }
      },
      resolve: async (parent, args) => {
        const data = { id: args.id}
       
        const updateData_db = await delData(
          data.book_id
        )

        return updateData_db

      }
    }
  })
});

module.exports = { DataType, AuthorType, RootQueryType, RootMutationType };