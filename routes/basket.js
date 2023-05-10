const express = require("express");
const router = express.Router();
const {
    GET_BASKET,
    // DELETE_BASKET,
} = require("../controllers/basket");

router.get("/basket", GET_BASKET);
// router.delete("/basket", DELETE_BASKET);

module.exports = router;