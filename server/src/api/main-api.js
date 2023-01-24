const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema } = require('graphql');
const { RootQueryType, RootMutationType } = require('../database/graphql/graphql-schema-config');

module.exports = (app) => {

    // Graphql
    const schema = new GraphQLSchema({
        query: RootQueryType,
        mutation: RootMutationType
    })

    app.use('/graphql/app', expressGraphQL({
        schema: schema,
        graphiql: true
    }))

}