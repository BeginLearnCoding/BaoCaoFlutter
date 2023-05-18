const Candidate = require("../models/candidate");

const CandidateController = {
  addCandidate: async (req, res) => {
    try {
      const newCandidate = new Candidate(req.body);
      const savedCandidate = await newCandidate.save();
      res.status(200).json(savedCandidate);
    } catch (err) {
      console.error(err); // Log the error to the console
      res.status(500).json(err);
    }
  },
  //GET ALL EMPLOYER
  getAllCandidate: async (req, res) => {
    try {
      const allCandidate = await Candidate.find();
      res.status(200).json(allCandidate);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET A EMPLOYER
  getACandidate: async (req, res) => {
    try {
      const candidate = await Candidate.findById(req.params.id); //.populate("appliedJob");
      res.status(200).json(candidate);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //UPDATE A EMPLOYER
  updateCandidate: async (req, res) => {
    try {
      const candidate = await Candidate.findById(req.params.id);
      await candidate.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = CandidateController;
