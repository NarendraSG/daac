const {Router} = require("express");

const router = new Router();

router.get("/", (req, res) => {
    res.send("Get Transaction");
})

router.post("/", (req, res)=>{
    res.send("Create Transaction");
})

module.exports = router;