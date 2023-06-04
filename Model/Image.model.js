const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    image_url:String,
},{
    versionKey:false
})

const ImageModel = mongoose.model("postedimages",imageSchema);

module.exports = { ImageModel };