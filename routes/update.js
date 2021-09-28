module.exports = function (db, app) {
  app.put("/api/productUpdate", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    product = req.body;
    const collection = db.collection("Products");
    collection.updateOne(
      { id: product.id },
      {
        $set: {
          id: product.id,
          Name: product.Name,
          Price: product.Price,
          Description: product.Description,
          units: product.units,
        },
      }
    );
    res.send({ err: null });
  });
};
