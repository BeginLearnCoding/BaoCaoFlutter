const Profession = require("../models/profession");

const ProfessionController = {
  addProfession: async (req, res) => {
    try {
      const newProfession = new Profession(req.body);
      const savedProfession = await newProfession.save();
      res.status(200).json(savedProfession);
    } catch (err) {
      console.error(err); // Log the error to the console
      res.status(500).json(err);
    }
  },
  //GET ALL PROFESSION
  getAllProfessions: async (req, res) => {
    try {
      const Professions = await Profession.find();
      res.status(200).json(Professions);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = ProfessionController;
