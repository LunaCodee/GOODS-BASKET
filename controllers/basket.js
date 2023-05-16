const uniqid = require("uniqid");
const BasketModel = require("../models/basket");
const GoodModel = require("../models/good");

module.exports.POST_BASKET = async (req, res) => {

const basketData = new BasketModel({
  title: req.body.title,
  goodsIdsList: [],
  id: uniqid(),
});

const newBasket = await basketData.save();
console.log(newBasket)
res.status(200).json({ response: "Basket was created" });
};


module.exports.DELETE_BASKET = async (req, res) => {
  await BasketModel.deleteOne({ id: req.params.id },);
  res.status(200).json({ response: "Basket was deleted" });
};
