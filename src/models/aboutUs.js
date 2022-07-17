const mongoose = require("mongoose");

const aboutUsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 1,
      max: 50,
    },
    titleDescription: {
      type: String,
      required: true,
      min: 1,
      max: 200,
    },
    nameCompany: {
      type: String,
      required: true,
      min: 1,
      max: 40,
    },
    description: {
      type: String,
      required: true,
      min: 1,
      max: 400,
    },
    aboutUsPicture: {
      type: String,
      required: true,
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("AboutUs", aboutUsSchema);
