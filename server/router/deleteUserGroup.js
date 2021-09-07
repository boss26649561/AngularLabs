//needs to check for existing username before creation
var fs = require("fs");

module.exports = function (req, res) {
  let group = req.body.group;
  let user = req.body.user;

  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    if (err) throw err;
    let GroupArray = JSON.parse(data);
    let i = GroupArray.findIndex((index) => index.name == group);
    if (i == -1) {
      res.send({ ok: false });
    } else {
      for (const index in GroupArray[i].users) {
        if (GroupArray[i].users[index].includes(user)) {
          GroupArray[i].users.splice(index, 1);
        }
      }
      gArrayjson = JSON.stringify(GroupArray);
      fs.writeFile("./data/groups.json", gArrayjson, function (err) {
        if (err) throw err;
      });
      res.send({ ok: true });
    }
  });
};
