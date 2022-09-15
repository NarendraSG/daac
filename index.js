const App = require("express")();
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const bodyParser = require("body-parser");
const { UserRoute, CategoryRoute, TransactionRoute } = require("./Routes");

mongoose.Promise = bluebird;
require("dotenv").config();

App.use(bodyParser.json());

App.get("/", (req, res) => {
  res.send("Welcome to GitPod");
});

App.use("/users", UserRoute);
App.use("/categories", CategoryRoute);
App.use("/transactions", TransactionRoute);

App.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  console.log("ERROR: ", JSON.stringify(error));

  res.send({ success: false });
});

App.listen(8001, () => {
  console.log("Listening on 8001");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("SUCCESSFULLY CONNECTED TO MONGO-1");
  })
  .catch((error) => {
    console.log("UNSUCCESSFUL CONNECTING MONGO", error);
    throw error;
  });
