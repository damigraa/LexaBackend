const mongoose = require("mongoose");

const benefitsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 1,
      max: 100,
    },
    description: {
      type: String,
      required: true,
      min: 1,
      max: 400,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Benefits", benefitsSchema);
