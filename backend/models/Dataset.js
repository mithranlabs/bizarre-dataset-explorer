const mongoose = require('mongoose');

const DatasetSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please add a title'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please add a description'],
    },
    sourceUrl: {
      type: String,
      required: [true, 'Please add a source URL'],
    },
    mernChallenge: {
      type: String,
      required: [true, 'Please add a MERN challenge'],
    },
    mlChallenge: {
      type: String,
      required: [true, 'Please add an ML challenge'],
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

module.exports = mongoose.model('Dataset', DatasetSchema);