const mongoose = require("mongoose");
const SubmitProfilesSchema = new mongoose.Schema({
  CV: {
    type: String,
    require: true,
  },
  Bio: {
    type: String,
  },
  status: {
    type: String,
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    require: true,
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
  },
});
module.exports = mongoose.model("SubmitProfile", SubmitProfilesSchema);
