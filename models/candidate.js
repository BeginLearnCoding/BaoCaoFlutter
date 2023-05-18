const mongoose = require("mongoose");
const candicateSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
  },

  fullname: {
    type: String,
    require: true,
  },
  Dob: {
    //Ngày sinh của candiate
    type: Date,
    require: true,
  },
  Gender: {
    type: Boolean,
    require: true,
  },
  bio: {
    //mô tả bản thân
    type: String,
    require: true,
  },
  cv: {
    type: String,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: "candidate",
  },
  status: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now, //Ngày tạo TK
  },
  appliedJob: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubmitProfile",
    },
  ],
});
module.exports = mongoose.model("Candidate", candicateSchema);
