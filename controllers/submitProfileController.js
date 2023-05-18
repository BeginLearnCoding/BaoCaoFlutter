const SubmitProfile = require("../models/submitProfile");
const Candidate = require("../models/employer");

const submitProfileController = {
  addSubmitProfile: async (req, res) => {
    try {
      const newSubmitProfile = new SubmitProfile(req.body);
      const savedSubmitProfile = await newSubmitProfile.save();
      /*
      if (req.body.job) {
        const job = SubmitProfile.findById(req.body.job);
        await job.updateOne({ $push: { jobs: savedSubmitProfile._id } });
      }*/

      res.status(200).json(savedSubmitProfile);
    } catch (err) {
      console.error(err); // Log the error to the console
      res.status(500).json(err);
    }
  },
  //GET ALL JOBS
  getAllSubmitProfiles: async (req, res) => {
    try {
      const allSubmitProfiles = await SubmitProfile.find();
      res.status(200).json(allSubmitProfiles);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET A JOB
  getASubmitProfile: async (req, res) => {
    try {
      const submitProfile = await SubmitProfile.findById(
        req.params.id
      ).populate("candidate");
      res.status(200).json(submitProfile);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //UPDATE JOB
  updateSubmitProfile: async (req, res) => {
    try {
      const submitProfile = await SubmitProfile.findById(req.params.id);
      await submitProfile.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DETELE JOB

  deleteSubmitProfile: async (req, res) => {
    try {
      await Candidate.updateMany(
        { appliedJob: req.params.id },
        { appliedJob: null }
      );
      await SubmitProfile.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = submitProfileController;
