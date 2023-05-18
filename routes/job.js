const jobController = require("../controllers/jobController");
const router = require("express").Router();

//ADD NEW JOB
router.post("/", jobController.addJob);
//GET ALL JOBS
router.get("/", jobController.getAllJobs);

//GET A JOB
router.get("/:id", jobController.getAJob);
//UPDATE
router.put("/:id", jobController.updateJob);
//DELETE
router.delete("/:id", jobController.deleteJob);

module.exports = router;
