const employerController = require("../controllers/employerController");
const router = require("express").Router();

//ADD NEW JOB
router.post("/", employerController.addEmployer);
//GET ALL EMPLOYER
router.get("/", employerController.getAllEmployer);

//GET A EMPLOYER
router.get("/:id", employerController.getAEmployer);
//UPDATE A EMPLOYER
router.put("/:id", employerController.updateEmployer);

module.exports = router;
