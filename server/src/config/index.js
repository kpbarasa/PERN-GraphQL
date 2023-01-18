const dotEnv = require("dotenv");

dotEnv.config({ path: '.env' });

module.exports = {

    PORT: process.env.PORT || 5000

}