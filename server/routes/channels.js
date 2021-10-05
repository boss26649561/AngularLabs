const { channel } = require("diagnostics_channel");

module.exports = function (db, app) {
  //Creates new channel
  app.post("/api/channels", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let name = req.body.name;
    let id = req.body.id;
    //find group via name then add into channel arra
    const groups = db.collection("groups");
    groups.updateOne({ name: name }, { $addToSet: { channels: id } });

    //add the new channel
    let newchannel = { id: id, Group: name, Chat: [] };
    const channels = db.collection("channel");
    channels.insertOne(newchannel, (err, docs) => {
      if (err) throw err;
      res.send({ ok: true });
    });
  });
};
