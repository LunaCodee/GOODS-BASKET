const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const {
    POST_BASKET,
    DELETE_BASKET,
} = require("../controllers/basket");

router.post("/basket", authMiddleware, POST_BASKET);
router.delete("/basket/:id", DELETE_BASKET);

module.exports = router;