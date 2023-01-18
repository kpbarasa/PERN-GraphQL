const express = require('express');
const {MainApi} = require('./api');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema } = require('graphql');
const { RootQueryType, RootMutationType } = require('./database/graphql/graphql-schema-config');

module.exports = async(app) => {
    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));
    
    // Graphql
    const schema = new GraphQLSchema({
        query: RootQueryType,
        mutation: RootMutationType
    })
    
    app.use('/posts/api', expressGraphQL({
        schema: schema,
        graphiql: true
    }))

    //api
    MainApi(app);
}