const uniqid = require("uniqid");
const GoodModel = require("../models/good");

module.exports.INSERT_GOOD = async (req, res) => {
        try {
          const good = new GoodModel({
            title: req.body.title,
            contentText: req.body.contentText,
            creator: req.body.creator,
            id: uniqid(),
          });
      
          await good.save();
      
          res.status(200).json({ response: "Good was saved successfully" });
        } catch (err) {
          res.status(500).json({ response: "Good was not saved, please try later" });
        }
      };




// INSERT_GOOD,
//         GET_GOOD_BY_ID,
//         EDIT_GOOD_CONTENT_BY_ID,
//         EDIT_GOOD_TITLE_BY_ID,
//         DELETE_GOOD,