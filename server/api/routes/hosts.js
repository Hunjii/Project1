const express = require("express");
const router = express.Router();

const HostController = require("../controllers/hosts");
const checkAuth = require("../middleware/check-auth");

router.get("/", HostController.host_get_all);

router.post("/signup", HostController.host_signup);

router.post("/login", HostController.host_login);

router.delete("/:userId", checkAuth, HostController.host_delete);

router.post("/:userId", HostController.host_update);

module.exports = router;
