const { Router } = require("express");
const userRouter = require("./contents/users/routes");
const router = Router();

router.use("/user/", userRouter);

module.exports = router;