const ProfessionController = require("../controllers/professionController");
const router = require("express").Router();

//ADD NEW Profession
router.post("/", ProfessionController.addProfession);

//GET ALL PROFESSIONS
router.get("/", ProfessionController.getAllProfessions);
module.exports = router;
