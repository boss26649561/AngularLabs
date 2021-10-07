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
    require("./routes/users.js")(db, app);
    require("./routes/groups.js")(db, app);
    require("./routes/login.js")(db, app);
    require("./routes/UserGroup.js")(db, app);
    require("./routes/channels.js")(db, app);
    require("./routes/group.js")(db, app);
    require("./routes/chat.js")(db, app);

    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  }
);

//ng build path
// var path = require("path");
// app.use(express.static(path.join(__dirname + "/../dist/week5")));
// console.log(path.join(__dirname + "/../dist/week5"));
