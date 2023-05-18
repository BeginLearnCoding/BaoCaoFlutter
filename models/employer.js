const mongoose = require("mongoose");
const employerSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },

  fullnameCty: {
    type: String,
    require: true,
  },
  DobCty: {
    type: Date,
    require: true,
  },
  bioCty: {
    //mô tả công ty
    type: String,
    require: true,
  },
  avatarCty: {
    type: String,
  },
  dateCreated: {
    type: Date,
  },
  role: {
    type: String,
    default: "employer",
  },
  statusCty: {
    type: String,
  },
  JobOpening: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
});

module.exports = mongoose.model("Employer", employerSchema);
