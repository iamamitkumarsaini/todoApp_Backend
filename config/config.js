require("dotenv").config();


module.exports = {
    cloudinary: {
      cloudName: process.env.cloudName,
      apiKey: process.env.apiKey,
      apiSecret: process.env.apiSecret,
    },
  };
  