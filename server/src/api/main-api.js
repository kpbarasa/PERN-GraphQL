const MainService = require('../services/main-service');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const { GraphQLSchema } = require('graphql');
const { RootQueryType, RootMutationType } = require('../database/graphql/graphql-schema-config');

module.exports = (app) => {

    const service = new MainService();
    
    // Graphql
    const schema = new GraphQLSchema({
        query: RootQueryType,
        mutation: RootMutationType
    })
    
    app.use('/graphql/app', expressGraphQL({
        schema: schema,
        graphiql: true
    }))
    

    app.post('/new/post', async (req, res, next) => {

        try {

            const {post_type, post_title, post_description, author_id} = req.body;

            const data = await service.newPost(post_type, post_title, post_description, author_id);

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.post('/update/post', async (req, res, next) => {

        try {

            const {post_id, post_type, post_title, post_description} = req.body;

            const data = await service.newPost(post_id, post_type, post_title, post_description);

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.delete('/delete/post', async (req, res, next) => {

        try {

            const {post_id} = req.body;

            const data = await service.delPost(post_id);

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.get('/get/post', async (req, res, next) => {

        try {

            const data = await service.getPosts();

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

    app.get('/get/post/:id', async (req, res, next) => {

        try {

            const post_id = req.params.id;

            const data = await service.getPostById(post_id);

            res.json(data);

        } catch (error) {

            next(error);

        }

    });

}