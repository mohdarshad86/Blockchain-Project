const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route.js");
const port = process.env.PORT;
const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mohdarshad86:Arshad86@cluster0.r4p7rwf.mongodb.net/BatsysBlockChain",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("BatsysDB is connected Successfully");
  })
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port || 3000, () => {
  console.log(`Server is running on port ${port || 3000}`);
});
