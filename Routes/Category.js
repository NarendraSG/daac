const { Router } = require("express");
const { CategoryController } = require("./../Controllers");
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const categories = await CategoryController.get(req.query.userId);
    res.send({ success: true, data: categories });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await CategoryController.create(req.body);
    res.send({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
