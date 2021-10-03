module.exports = function (db, app) {
  app.get("/api/users", function (req, res) {
    const user = db.collection("users");
    userArray = [];
    user.find({}).toArray((err, data) => {
      for (const index in data) {
        userArray.push(data[index].username);
      }
      res.send({ ok: true, Users: userArray });
    });
  });
};
