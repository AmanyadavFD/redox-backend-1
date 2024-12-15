const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://neoGStudent:neoG123@neog.8oxbf.mongodb.net/?retryWrites=true&w=majority&appName=neoG";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
