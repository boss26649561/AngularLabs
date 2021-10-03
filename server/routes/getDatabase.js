module.exports = function (db, app) {
  app.get("/api/database", function (req, res) {
    const user = db.collection("users");
    user.find({}).toArray((err, data) => {
      console.log("Found the following records");
      console.log(data);
    });
    const group = db.collection("groups");
    group.find({}).toArray((err, data) => {
      console.log("Found the following records");
      console.log(data);
    });
    const channel = db.collection("channel");
    channel.find({}).toArray((err, data) => {
      console.log("Found the following records");
      console.log(data);
    });
  });
};
