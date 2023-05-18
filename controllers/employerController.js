const Employer = require("../models/employer");

const EmployerController = {
  addEmployer: async (req, res) => {
    try {
      const newEmployer = new Employer(req.body);
      const savedEmployer = await newEmployer.save();
      res.status(200).json(savedEmployer);
    } catch (err) {
      console.error(err); // Log the error to the console
      res.status(500).json(err);
    }
  },
  //GET ALL EMPLOYER
  getAllEmployer: async (req, res) => {
    try {
      const allEmployer = await Employer.find();
      res.status(200).json(allEmployer);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //GET A EMPLOYER
  getAEmployer: async (req, res) => {
    try {
      const employer = await Employer.findById(req.params.id).populate(
        "JobOpening"
      );
      res.status(200).json(employer);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //UPDATE A EMPLOYER
  updateEmployer: async (req, res) => {
    try {
      const employer = await Employer.findById(req.params.id);
      await employer.updateOne({ $set: req.body });
      res.status(200).json("Updated successfully!");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = EmployerController;
