const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 30,
    },
    nameCompany: {
      type: String,
      // required: true,
      min: 1,
      max: 100,
    },
    descriptionProblem: {
      type: String,
      // required: true,
      min: 1,
      max: 300,
    },
    email: {
      type: String,
      // required: true,
    },
    contactNumber: {
      type: String,
      // required: true,
    },
    samplePhoto: [ 
      {
          img: {
              type: String,
              // required: true,
          }
      }
  ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
