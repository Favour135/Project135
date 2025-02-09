const express = require("express");

const router = express.Router();

const registerRoute = require("./registerRoute");
const loginRoute = require("./loginRoute");
const alumniListRoute = require("./alumniListRoute");
const jobRoutes = require("./jobRoutes");
const eventRoutes = require("./eventRoutes");

router.get("/", (req, res) => {
  console.log("Server is up and running.");
  res.send("Server is up and running.");
});

router.use("/register", registerRoute);
router.use("/event", eventRoutes);
console.log("registerRoute 1");
router.use("/auth", loginRoute);
router.use("/", alumniListRoute);
router.use("/jobs", jobRoutes);

module.exports = router;
