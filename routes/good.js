const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { 
        INSERT_GOOD,
        GET_GOOD_BY_ID,
        EDIT_GOOD_CONTENT_BY_ID,
        EDIT_GOOD_TITLE_BY_ID,
        DELETE_GOOD,
  } = require("../controllers/good");

router.post("/good", auth, INSERT_GOOD);
router.get("/good/:id", GET_GOOD_BY_ID);
router.put("/good/content/:id", EDIT_GOOD_CONTENT_BY_ID);
router.put("/good/title/:id", EDIT_GOOD_TITLE_BY_ID);
router.delete("/good/:id", DELETE_GOOD);

module.exports = router;