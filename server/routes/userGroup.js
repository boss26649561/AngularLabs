module.exports = function (db, app) {
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
