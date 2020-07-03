const express = require("express"); 
const mongoose = require("mongoose"); 
const logger = require("morgan"); 
const helmet = require("helmet"); 
const cors = require("cors"); 

require("dotenv").config(); 
const PORT = process.env.PORT || 3001; 

require("./models/userModel"); 
const userRoutes = require("./routes/api/userRoutes"); 
const { makeArray } = require("jquery");


const app = express(); 

app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(helmet()); 
app.use(cors()); 
app.use(logger("dev")); 
if (process.env.NODE_ENV !== "production"){
    app.use(logger("tiny"))
} else {
    app.use(express.static("client/build")); 
}
app.use("/users", userRoutes)

app.use(express.static("public")); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/scout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
mongoose.connection.on("error", err => {
  console.error(err.message);
});np

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });