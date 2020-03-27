const mongoose = require("mongoose");

var PatientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  image: String,
  medics: String,
  notes: String
});

var Patient_Detail = mongoose.model("Patient_Detail", PatientSchema);

module.exports = {
  Patient_Detail
};
