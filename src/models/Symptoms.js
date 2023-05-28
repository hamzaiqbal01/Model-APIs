const mongoose = require("mongoose");

const SymptomsSchema = mongoose.Schema({
  desaese_name: {
    type: String,
    required: true,
  },
  symptoms: {
    type: [String], // Array of strings
    required: true,
  },
  treatment: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Symptoms", SymptomsSchema);
