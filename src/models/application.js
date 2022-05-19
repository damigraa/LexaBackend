const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    descriptionProblem: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      // trim: true,
      // lowercase: true,
    },
    contactNumber: {
      type: String,
      required: true,
    },
    samplePhoto: {
      type: String,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
