var fs = require("fs");

module.exports = function (req, res) {
  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    if (err) throw err;
    let GroupArray = JSON.parse(data);
    let id = 0;
    for (const index in GroupArray) {
      for (const i in GroupArray[index].channels) {
        if (GroupArray[index].channels[i] > id) {
          id = GroupArray[index].channels[i];
        }
      }
    }

    res.send({ ok: true, Groups: GroupArray, id: id });
  });
};
