const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const goodRouter = require("./routes/good");
// const basketRouter = require("./routes/basket);
const user = require("./routes/user");

const mongoose = require("mongoose");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(goodRouter);
// app.use(basketRouter);
app.use(user);

mongoose
  .connect(process.env.MONGO_CONNECT)
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});
