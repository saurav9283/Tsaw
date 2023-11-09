const express = require("express");
const  {location}  = require("../Controller/Locationinsert");
const router = express.Router();

router.post("/location", location);

module.exports = router;
