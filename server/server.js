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
app.post("/api/createUser", require("./router/createUser"));
app.post("/api/getGroups", require("./router/getGroups"));
app.post("/api/getChat", require("./router/getChat"));
app.post("/api/updateChat", require("./router/updateChat"));
app.put("/api/deleteUser", require("./router/deleteUser"));
app.put("/api/addToGroup", require("./router/addToGroup"));
app.get("/api/getAllGroups", require("./router/getAllGroups"));
app.get("/api/getUsers", require("./router/getUser"));
//add group assistent to user
//app.put("/api/add", require("./router/createUser"));
