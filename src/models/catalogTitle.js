const mongoose = require("mongoose");

const catalogTitleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 3,
    },
    description: {
      type: String,
      required: true,
      min: 3,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CatalogTitle", catalogTitleSchema);
