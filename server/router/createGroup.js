//needs to check for existing username before creation
var fs = require("fs");

module.exports = function (req, res) {
  let name = req.body.name;
  let newGroup = { name: name, users: [], channels: [] };
  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    if (err) throw err;
    let GroupArray = JSON.parse(data);
    GroupArray.push(newGroup);
    gArrayjson = JSON.stringify(GroupArray);
    fs.writeFile("./data/groups.json", gArrayjson, function (err) {
      if (err) throw err;
    });
    res.send({ ok: true });
  });
};
