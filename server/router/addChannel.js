//need to write to both channel and groups
var fs = require("fs");

module.exports = function (req, res) {
  let name = req.body.name;
  let id = req.body.id;
  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    let GroupArray = JSON.parse(data);
    let i = GroupArray.findIndex((grouparr) => grouparr.name == name);
    if (i == -1) {
      console.log("failed to find name");
      res.send({ ok: false });
    } else {
      GroupArray[i].channels.push(id);
      gArrayjson = JSON.stringify(GroupArray);
      fs.writeFile("./data/groups.json", gArrayjson, function (err) {
        if (err) throw err;
      });
    }
  });
  fs.readFile("./data/channel.json", "utf8", function (err, data) {
    let newChannel = { id: id, Group: name, Chat: [] };
    let ChannelArray = JSON.parse(data);
    ChannelArray.push(newChannel);
    cArrayjson = JSON.stringify(ChannelArray);
    fs.writeFile("./data/channel.json", cArrayjson, function (err) {
      if (err) throw err;
      res.send({ ok: true });
    });
  });
};
