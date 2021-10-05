module.exports = function (db, app) {
  //get sends back the current ID + array of all groups
  app.get("/api/groups", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let id = 0;
    GroupArray = [];
    const groups = db.collection("groups");
    groups.find({}).toArray((err, data) => {
      for (const index in data) {
        GroupArray.push(data[index]);
        for (const i in data[index].channels) {
          if (data[index].channels[i] > id) {
            id = data[index].channels[i];
          }
        }
      }
      //console.log(GroupArray);
      res.send({ ok: true, Groups: GroupArray, id: id });
    });
  });
  //Create a new group using req.body
  app.post("/api/groups", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let name = req.body.name;
    let newGroup = { name: name, users: [], channels: [] };
    const groups = db.collection("groups");
    groups.insertOne(newGroup, (err, docs) => {
      if (err) throw err;
      res.send({ ok: true });
    });
  });
  //Delete  group using req.body
  app.put("/api/groups", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let name = req.body.name;
    const groups = db.collection("groups");
    groups.deleteOne({ name: name }, (err, docs) => {
      if (err) throw err;
      res.send({ ok: true });
    });
  });
};
