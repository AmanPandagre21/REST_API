const express = require("express");
const app = express();
const userRouter = require("../routers/route");
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`server is running on port number ${port}`);
});
