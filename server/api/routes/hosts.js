const express = require("express");
const router = express.Router();

const HostController = require("../controllers/hosts");
const checkAuth = require("../middleware/check-auth");

router.get("/", HostController.host_get_all);

router.post("/signup", HostController.host_signup);

router.post("/login", HostController.host_login);

router.delete("/:hostId", HostController.host_delete);

router.post("/:hostId", HostController.host_update);

router.get("/:hostId", HostController.host_get_detail);

module.exports = router;
