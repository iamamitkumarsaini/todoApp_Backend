const mongoose = require("mongoose");
require("dotenv").config();

const conenction = mongoose.connect(process.env.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = { conenction };