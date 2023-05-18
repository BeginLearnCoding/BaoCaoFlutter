const submitProfileController = require("../controllers/submitProfileController");
const router = require("express").Router();

//ADD NEW Submit
router.post("/", submitProfileController.addSubmitProfile);
//GET ALL Submit
router.get("/", submitProfileController.getAllSubmitProfiles);

//GET A Submit
router.get("/:id", submitProfileController.getASubmitProfile);
//UPDATE
router.put("/:id", submitProfileController.updateSubmitProfile);
//DELETE
router.delete("/:id", submitProfileController.deleteSubmitProfile);

module.exports = router;
