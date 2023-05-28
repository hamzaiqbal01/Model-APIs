const mongoose = require("mongoose");

const WheatDiseaseSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  symptoms: {
    type: String,
    require: true,
  },
  treatment: {
    type: String,
    require: true,
  },
  madicineImage: {
    type: String,
    default: "VALUE",
  },
});

module.exports = mongoose.model("WheatDisease", WheatDiseaseSchema);
