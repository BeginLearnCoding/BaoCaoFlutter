const candidateController = require("../controllers/candidateController");
const router = require("express").Router();

//ADD NEW JOB
router.post("/", candidateController.addCandidate);
//GET ALL EMPLOYER
router.get("/", candidateController.getAllCandidate);

//GET A EMPLOYER
router.get("/:id", candidateController.getACandidate);
//UPDATE A EMPLOYER
router.put("/:id", candidateController.updateCandidate);

module.exports = router;
