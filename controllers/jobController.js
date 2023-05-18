const Job = require("../models/job");
const Employer = require("../models/employer");

const jobController = {
  addJob: async (req, res) => {
    try {
      const newJob = new Job(req.body);
      const savedJob = await newJob.save();
      /*
      if (req.body.Majors) {
        const Majors = Job.findById(req.body.Majors);
        await Majors.updateOne({ $push: { books: savedJob._id } });
      }*/
      res.status(200).json(savedJob);
    } catch (err) {
      console.error(err); // Log the error to the console
      res.status(500).json(err);
    }
  },
  //GET ALL JOBS
  getAllJobs: async (req, res) => {
    try {
      const allJobs = await Job.find();
      res.status(200).json(allJobs);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET A JOB
  getAJob: async (req, res) => {
    try {
      const job = await Job.findById(req.params.id).populate("employer");
      res.status(200).json(job);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //UPDATE JOB
  updateJob: async (req, res) => {
    try {
      const job = await Job.findById(req.params.id);
      await job.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },

  //DETELE JOB

  deleteJob: async (req, res) => {
    try {
      await Employer.updateMany(
        { employer: req.params.id },
        { employer: null }
      );
      await Job.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = jobController;
