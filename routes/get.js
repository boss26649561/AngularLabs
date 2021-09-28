module.exports = function (db, app) {
  app.get("/api/productFind", function (req, res) {
    const collection = db.collection("Products");
    collection.find({}).toArray((err, data) => {
      console.log("Found the following records");
      console.log(data);
      res.send(data);
    });
  });
};
