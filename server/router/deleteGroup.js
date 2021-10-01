var fs = require("fs");

module.exports = function (req, res) {
  let name = req.body.name;
  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    if (err) throw err;
    let GroupArray = JSON.parse(data);
    for (const index in GroupArray) {
      if (GroupArray[index].name == name) {
        GroupArray.splice(index, 1);
      }
    }

    gArrayjson = JSON.stringify(GroupArray);
    fs.writeFile("./data/groups.json", gArrayjson, function (err) {
      if (err) throw err;
    });
    res.send({ ok: true });
  });
};
