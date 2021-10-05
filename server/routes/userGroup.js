
module.exports = function (db, app) {
  //get list of groups for that specific user (group assis/normal user)
  app.get("/api/userGroup", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let username = req.body.username;
    let Groupnames = [];
    let id = 0;
    const groups = db.collection("groups");

    //grab id
    groups.find({}).toArray((err, data) => {
      for (const index in data) {
        if (GroupArray[index].users.includes(username)) {
          group = {
            name: GroupArray[index].name,
            channels: GroupArray[index].channels,
          };
          Groupnames.push(group);
        }
        for (const i in data[index].channels) {
          if (data[index].channels[i] > id) {
            id = data[index].channels[i];
          }
        }
      }
    });

    //console.log(Groupnames);
    if (Groupnames.length > 0) {
      res.send({ ok: true, Groups: Groupnames, id: id });
    } else res.send({ ok: false });
  });

  //add user to a group
  app.post("/api/userGroup", function (req, res) {
    let groupname = req.body.group;
    let user = req.body.user;
    //Find group, add user to array if user is not array
    const groups = db.collection("groups");
    //{ $and: [{ name: groupname }, { users: { $in: user } }] };
    const query = {
      name: groupname,
      users: { $in: [user] },
    };
    groups.findOne(query, (err, data) => {
      console.log(data);
      if (!data) {
        groups.updateOne({ name: groupname }, { $addToSet: { users: user } });
        res.send({ ok: true });
      } else {
        res.send({ ok: false });
      }
      //check if user is already in array
    });
  });

  //removes a user from a group
  app.put("/api/userGroup", function (req, res) {
    let groupname = req.body.group;
    let user = [req.body.user];
    const group = db.collection("groups");
    group.updateOne({ name: groupname }, { $pull: { users: user } });
    res.send({ ok: true });
  });
};
