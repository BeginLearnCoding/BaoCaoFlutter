const mongoose = require("mongoose");
const JobSchema = new mongoose.Schema({
  jobName: {
    type: String,
    require: true,
  },
  Majors: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profession",
    require: true,
  },

  Salary: {
    type: Number,
    //Định dạng theo kiểu Salary Range
  },
  numberOfCandidate: {
    type: Number,
    require: true,
    //Số lượng người cần tuyển
  },
  jobLevels: {
    type: String,
    enum: [
      "Intern",
      "Fresher",
      "Junior",
      "Middle",
      "Senior",
      "Lead",
      "Not specifically mentioned",
    ],
    require: true,
  },
  experience: {
    type: String,
    enum: [
      "Inexperience",
      "oneYearOrLess",
      "oneToThreeYears",
      "ThreeToFiveYears",
      "OverFiveYears",
    ],
    require: true,
  },
  jobLocation: {
    type: String,
    require: true,
  },
  jobDescription: {
    type: String,
    require: true,
  },
  jobRequire: {
    type: String,
    require: true,
  },
  jobPerks: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    require: true,
  },
  approach: {
    //trạng thái duyệt tin đăng của Employer gởi đến Admin, true thì duyệt Tin tuyển dụng, false thì không.
    type: Boolean,
    default: true,
    require: true,
  },
  submitProfies: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubmitProfile",
    },
  ],
  employer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employer",
    require: true,
  },
});
module.exports = mongoose.model("Job", JobSchema);
