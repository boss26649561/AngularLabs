const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http").Server(app);
const cors = require("cors");
const MongoClient = require("mongodb").MongoClient;
var ObjectID = require("mongodb").ObjectID;

app.use(cors());
app.use(bodyParser.json());
const url = "mongodb://localhost:27017";
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    if (err) {
      return console.log(err);
    }
    const dbName = "Assignment2";
    const db = client.db(dbName);
    require("./routes/initialiseDB.js")(db, app);
    require("./routes/getDatabase.js")(db, app);
    require("./routes/login.js")(db, app);
    // require("./routes/update.js")(db, app);

    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  }
);

//ng build path
// var path = require("path");
// app.use(express.static(path.join(__dirname + "/../dist/week5")));
// console.log(path.join(__dirname + "/../dist/week5"));

// app.post("/api/login", login);
// app.post("/api/createUser", require("./router/createUser"));
// app.post("/api/createGroup", require("./router/createGroup"));
// app.post("/api/getGroups", require("./router/getGroups"));
// app.post("/api/getChat", require("./router/getChat"));
// app.post("/api/updateChat", require("./router/updateChat"));
// app.put("/api/deleteUser", require("./router/deleteUser"));
// app.put("/api/deleteGroup", require("./router/deleteGroup"));
// app.put("/api/deleteUserGroup", require("./router/deleteUserGroup"));
// app.put("/api/addToGroup", require("./router/addToGroup"));
// app.put("/api/addChannel", require("./router/addChannel"));
// app.get("/api/getAllGroups", require("./router/getAllGroups"));
// app.get("/api/getUsers", require("./router/getUser"));
//add group assistent to user
//app.put("/api/add", require("./router/createUser"));
