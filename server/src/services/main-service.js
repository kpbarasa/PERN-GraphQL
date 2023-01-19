const { MaingaphQlFunction } = require('../database/')
const { GraphQlFunctions } = require('../database/graphql/');
const { FormateData } = require('../utils/');
const { NotFoundError } = require('../utils/errors/app-errors');

class mainService {

    constructor() {
        this.gaphQlFunction = new GraphQlFunctions;
    }

    async newPost(post_type, post_title, post_description, author_id) {

        const data = await this.gaphQlFunction.newPost(post_type, post_title, post_description, author_id)

        if (!data) throw new NotFoundError("Sorry no data found");

        const payload = {
            message: "success",
            status: "404",
            response_data: data,
        };

        return FormateData(payload)

    };

    async update_post(post_id, post_type, post_title, post_description) {

        await this.gaphQlFunction.update_post(post_id, post_type, post_title, post_description)

        const data = await this.gaphQlFunction.GetDataById(post_id)

        const payload = {
            message: "Data successfully updated",
            status: "404",
            response_data: data,
        };

        return FormateData(payload);

    };

    async delPost(post_id) {

        const response_data = await this.gaphQlFunction.delPost(post_id);

        if (!response_data) throw new NotFoundError("Sorry no data found");

        await this.gaphQlFunction.DeleteData(post_id);

        const payload = {
            message: "Data successfully deleted",
            status: "404",
            response_data,
        };

        const data = FormateData(payload)

        return data;

    };

    async getPosts() {

        const { data } = await this.gaphQlFunction.getPosts();

        if (!data) throw new NotFoundError("Sorry no data found");

        const payload = {
            message: "Data successfully found",
            status: "404",
            response_data: data,
        };

        return FormateData(payload);

    };

    async getPostById(api_data) {

        const data = await this.gaphQlFunction.getPostById(api_data)

        if (!data) throw new NotFoundError("Sorry no data found");

        const payload = {
            message: "Data successfully found",
            status: "404",
            response_data: data,
        };

        return FormateData(payload);

    };

};

module.exports = mainService;