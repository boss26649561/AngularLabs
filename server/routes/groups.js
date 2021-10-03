module.exports = function (db, app) {
  app.get("/api/groups", function (req, res) {
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
};
