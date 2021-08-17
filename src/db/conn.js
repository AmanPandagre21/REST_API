const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/createapi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connection is succesfull..."))
  .catch((e) => {
    console.log(e);
  });
