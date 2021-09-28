const { ObjectID } = require("bson");

module.exports = function (db, app) {
  app.post("/api/productDelete", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    id = req.body.id;
    //console.log(id);
    //var objectid = new ObjectID(id);
    //console.log(objectid);
    const collection = db.collection("Products");
    collection.deleteOne({ id: id }, (err, docs) => {
      collection.find({}).toArray((err, data) => {
        res.send(data);
      });
    });
  });
};
