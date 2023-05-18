var express = require("express");
var cors = require("cors");
var app = express();
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var dotenv = require("dotenv");

//KHAI BÁO ROUTER
var jobRoute = require("./routes/job");
var professionRoute = require("./routes/profession");
var employerRoute = require("./routes/employer");
var candidateRoute = require("./routes/candidate");
var submitProfileRoute = require("./routes/submitProfile");
dotenv.config();
//connect MongoDB

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("Connected to MongoDB"); // output: "value"
});

/*
mongoose
  .connect(process.env.MONGODB_URL, options)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));
*/
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//ROUTES

app.use("/api/job", jobRoute);
app.use("/api/profession", professionRoute);
app.use("/api/employer", employerRoute);
app.use("/api/candidate", candidateRoute);
app.use("/api/submitProfile", submitProfileRoute);
app.listen(8000, () => {
  console.log("Listening at: 8000...");
});

/*
app.get("/", function (req, res) {
  res.send("Hello World");
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});*/
