module.exports = function (db, app) {
  //Retrieves Users in database
  app.get("/api/users", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    const user = db.collection("users");
    userArray = [];
    user.find({}).toArray((err, data) => {
      for (const index in data) {
        userArray.push(data[index].username);
      }
      res.send({ ok: true, Users: userArray });
    });
  });

  //creates new user
  app.post("/api/users", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let userobj = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: "User",
    };
    const user = db.collection("users");
    //search for duplicate username
    user.findOne({ username: userobj.username }, (err, data) => {
      if (!data) {
        user.insertOne(userobj, (err, docs) => {
          if (err) throw err;
          res.send({ ok: true });
        });
      } else {
        res.send({ ok: false });
      }
    });
  });

  //deletes user
  app.put("/api/users", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let username = req.body.username;
    console.log(username);
    const user = db.collection("users");
    user.deleteOne({ username: username }, (err, data) => {
      if (err) throw err;
      res.send({ ok: true });
    });
  });
};
