//finds channel via id then updates chat array
var fs = require("fs");

module.exports = function (req, res) {
  let id = req.body.id;
  let chat = req.body.chat;
  console.log(id, chat);
  fs.readFile("./data/channel.json", "utf8", function (err, data) {
    if (err) throw err;
    let ChannelArray = JSON.parse(data);
    for (const index in ChannelArray) {
      if (ChannelArray[index].id == id) {
        ChannelArray[index].Chat = chat;
      }
    }
    channeljson = JSON.stringify(ChannelArray);
    fs.writeFile("./data/channel.json", channeljson, function (err) {
      if (err) throw err;
    });
    res.send({ ok: true });
  });
};
