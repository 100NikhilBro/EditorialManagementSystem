const mongoose = require("mongoose");

const associateEditorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  affiliation: {
    type: String,
    required: true,
  },
  expertise: [
    {
      type: [String],
    },
  ],
  profileLink: {
    type: String,
  },
  addedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AssociateEditor", associateEditorSchema);
