var express = require("express");
var login = require("./router/postLogin");
var app = express();

var cors = require("cors");
app.use(cors());

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require("path");
app.use(express.static(path.join(__dirname + "/../dist/week5")));
console.log(path.join(__dirname + "/../dist/week5"));

var http = require("http").Server(app);
var server = http.listen(3000, function () {
  console.log("server listening on port: 3000");
});

app.post("/api/login", login);
//app.post("/loginafter", require("./router/postLoginafter"));
