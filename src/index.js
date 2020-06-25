//env credentials
require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import indexRouter from "./routes/index";
import listRouter from "./routes/list";
import taskRouter from "./routes/task";

const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuring the database
require("./config/db/index");
//Routes
app.use("/api", indexRouter);
app.use("/api/list/", listRouter);
app.use("/api/task/", taskRouter);

app.get("/", (req, res) => {
  res.json({ status: "OK" });
});
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
