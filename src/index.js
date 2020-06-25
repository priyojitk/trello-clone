import express from "express";
import mongoose from "mongoose";
import indexRouter from "./routes/index";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Configuring the database
const dbConfig = require("./config/db");

// mongoose.Promise = global.Promise;
// Connecting to the database

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.use("/api", indexRouter);

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
