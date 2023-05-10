const uniqid = require("uniqid");
const BasketModel = require("../models/basket");

module.exports.GET_BASKET = async (req, res) => {

  const basketData = await BasketModel.find();

  res.status(200).json({ basketData: basketData });
};
