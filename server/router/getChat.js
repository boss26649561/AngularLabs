//find id in channel then returns chat messages

var fs = require("fs");
module.exports = function (req, res) {
  let id = req.body.id;
  let Chat;
  console.log(id);
  fs.readFile("./data/channel.json", "utf8", function (err, data) {
    if (err) throw err;
    let ChannelArray = JSON.parse(data);
    //console.log(GroupArray);
    for (const index in ChannelArray) {
      if (ChannelArray[index].id == id) {
        Chat = ChannelArray[index].Chat;
      }
    }
    console.log(Chat);
    res.send({ ok: true, chat: Chat });
  });
};
