const {Router} = require("express");

const router = new Router();

router.get("/", (req, res) => {
    res.send("Get Category");
})

router.post("/", (req, res)=>{
    res.send("Create Category");
})

module.exports = router;