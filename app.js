var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv").config();
var connectDB = require("./server/database/connction");

const app = express();

const PORT = process.env.PORT || 8080;

// Connect to database
connectDB();

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// set view engine
app.set("view engine", "ejs");

// load assets
app.use(express.static("public"));

// use routes
app.use("/", require("./routes/router"));

app.listen(PORT, () => console.log(`app run on port ${PORT}`));
