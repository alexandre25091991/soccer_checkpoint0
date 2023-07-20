const express = require("express");

const router = express.Router();

const playerControllers = require("./controllers/playerControllers");

router.get("/player", playerControllers.browse);
router.get("/player/:id", playerControllers.read);
router.put("/player/:id", playerControllers.edit);
router.post("/player", playerControllers.add);
router.delete("/player/:id", playerControllers.destroy);

const teamControllers = require("./controllers/teamControllers");

router.get("/team", teamControllers.browse);
router.get("/team/:id", teamControllers.read);
router.put("/team/:id", teamControllers.edit);
router.post("/team", teamControllers.add);
router.delete("/team/:id", teamControllers.destroy);

module.exports = router;
