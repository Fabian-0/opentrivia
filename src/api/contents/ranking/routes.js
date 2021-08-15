const { Router } = require("express");
const router = Router();
const validateToken = require("../middleware/authToken");
const { updateRanking } = require("./controller");

router.put('/', validateToken, updateRanking);

module.exports = router;