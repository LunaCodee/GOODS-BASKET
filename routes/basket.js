const express = require("express");
const router = express.Router();
const {
    GET_BASKET,
    GET_GOOD_BY_ID,
    DELETE_GOOD,
    DELETE_BASKET,
} = require("../controllers/basket");

router.get("/basket", GET_BASKET);
router.get("/good/:id", GET_GOOD_BY_ID);
router.delete("/good/:id", DELETE_GOOD);
router.delete("/basket", DELETE_BASKET);

module.exports = router;