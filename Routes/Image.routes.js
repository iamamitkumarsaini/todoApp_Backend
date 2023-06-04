const express = require("express");
const { ImageModel } = require("../Model/Image.model");
const upload = require('../utils/multer');


const postImageRoutes = express.Router();


postImageRoutes.post("/upload", upload.single("image"), async(req,res) => {
    try {
        const result = req.file;
        const image = await ImageModel.create({ image_url: result.secure_url });
        res.send({"Message":"req is Successful", image})
    } 
    
    catch (err) {
        console.log(err)
        res.send({"Message":"Error while posting"})
    }
})


postImageRoutes.get('/', async (req, res) => {
    try {
      const images = await Image.find();
      res.status(200).json({ images });
    } catch (error) {
      console.error('Get images error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


module.exports = { postImageRoutes }
