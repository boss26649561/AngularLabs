module.exports = function (db, app) {
  app.post("/api/login", function (req, res) {
    var u = req.body.username;
    var p = req.body.pwd;
    c = u + p;
    // console.log(c);
    const user = db.collection("users");
    user.find({}).toArray((err, data) => {
      console.log(data);
      let i = data.findIndex(
        (user) => user.username == u && user.password == p
      );
      if (i == -1) {
        res.send({ ok: false });
      } else {
        res.send({ ok: true, user: data[i] });
      }
    });
  });
};
