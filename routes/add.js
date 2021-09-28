module.exports = function (db, app) {
  app.post("/api/productInsert", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    product = req.body;

    const collection = db.collection("Products");
    //duplicate check
    collection.find({ id: product.id }).count((err, count) => {
      if (count == 0) {
        collection.insertOne(product, (err, dbres) => {
          if (err) throw err;
          //let num = dbres.insertedCount;
          res.send({ err: null });
        });
      } else {
        res.send({ err: "Duplicate id" });
      }
    });
  });
};
