const { Router } = require("express");
const { TransactionController } = require("./../Controllers");

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const transactions = await TransactionController.get(
      req.query.user,
      req.query.category,
      req.query.transaction
    );
    res.send({ success: true, data: transactions });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await TransactionController.create(req.body);
    res.send({ success: true });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
