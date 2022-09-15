const { Router } = require("express");
const { UserController } = require("../Controllers");
const router = new Router();

router.post("/", async (req, res) => {
  const user = await UserController.create(req.body.email);
  res.send({ status: "success", data: user });
});

module.exports = router;
