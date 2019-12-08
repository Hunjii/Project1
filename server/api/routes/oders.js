const express = require("express");
const router = express.Router();

const OderController = require("../controllers/oders");
const checkAuth = require("../middleware/check-auth");

router.get("/", OderController.Oders_get_all);

router.delete("/:oderId", OderController.Oders_delete);

router.post("/", OderController.Oders_create_oder);

router.get("/:oderId", OderController.Oders_get_oder);

router.patch("/:oderId", OderController.Oders_update_oder);

module.exports = router;
