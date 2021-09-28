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
    const dbName = "mydb";
    const db = client.db(dbName);
    require("./routes/add.js")(db, app);
    require("./routes/get.js")(db, app);
    require("./routes/delete.js")(db, app, ObjectID);
    require("./routes/update.js")(db, app, ObjectID);

    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  }
);
