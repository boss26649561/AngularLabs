module.exports = function (db, app) {
  //get list of groups for that specific user (group assis/normal user)
  app.post("/api/Group", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let username = req.body.username;
    let Groupnames = [];
    let id = 0;

    const groups = db.collection("groups");
    //grab group and id
    groups.find({}).toArray((err, data) => {
      for (const index in data) {
        //console.log(data[index].name);
        if (data[index].users.includes(username)) {
          group = {
            name: data[index].name,
            channels: data[index].channels,
          };
          Groupnames.push(group);
          //console.log(Groupnames);
        }
        for (const i in data[index].channels) {
          if (data[index].channels[i] > id) {
            id = data[index].channels[i];
          }
        }
      }
      if (Groupnames.length > 0) {
        res.send({ ok: true, Groups: Groupnames, id: id });
      } else res.send({ ok: false });
    });
  });
};
