import mongoose from "mongoose";
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const url = "mongodb://localhost:27017/trello";
// export const url = "mongodb+srv://MONGO_USER:MONGO_PASSWORD@cluster0-z6jvu.mongodb.net/trello?retryWrites=true&w=majority";

// mongoose.Promise = global.Promise;
// Connecting to the database
mongoose
  .connect(url, {
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
