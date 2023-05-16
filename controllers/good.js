const uniqid = require("uniqid");
const GoodModel = require("../models/good");
const BasketModel = require("../models/basket");
const jwt = require("jsonwebtoken");

module.exports.INSERT_GOOD = async (req, res) => {
  try {
        const token = req.headers.authorization;
        console.log("token", token);

        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
          if (err) {
          return res.status(401).json({ response: "Auth failed" });
          }

          const good = new GoodModel({
            title: req.body.title,
            contentText: req.body.contentText,
            creator: req.body.creator,
            id: uniqid(),
          });
      
        const savedGood =  await good.save();

        BasketModel.updateOne(
        { id: req.body.basketId},
        { $push: { goodsIdsList: savedGood.id } }
         ).exec();
          res.status(200).json({ response: "Good was saved successfully" });
      }); 
      
        } catch (err) {
          res.status(500).json({ response: "Good was not saved, please try later" });
        }
      };

        
        
module.exports.GET_GOOD_BY_ID = async (req, res) => {
  const good = await GoodModel.find({ id: req.params.id });
  res.status(200).json({ response: good });
};

  


module.exports.EDIT_GOOD_CONTENT_BY_ID = async (req, res) => {
  const updatedContentText = await GoodModel.updateOne(
    { id: req.params.id },
    { contentText: req.body.contentText }
  );
  res.status(200).json({ response: "Content text was updated" });
};

module.exports.EDIT_GOOD_TITLE_BY_ID = async (req, res) => {
  const updatedTitle = await GoodModel.updateOne(
    { id: req.params.id },
    { title: req.body.title }
  );
  res.status(200).json({ response: "Title was updated" });
};

module.exports.DELETE_GOOD = async (req, res) => {
  await GoodModel.deleteOne({ id: req.params.id },);
  res.status(200).json({ response: "Good was deleted" });
};
