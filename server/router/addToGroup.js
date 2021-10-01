//finds group via name then pushes a new user to the users array
var fs = require("fs");

module.exports = function (req, res) {
  let group = req.body.group;
  let user = req.body.user;
  console.log(user + group);
  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    if (err) throw err;
    let groupArray = JSON.parse(data);
    let i = groupArray.findIndex((grouparr) => grouparr.name == group);
    //no username found
    if (i == -1) {
      res.send({ ok: false });
    } else {
      groupArray[i].users.push(user);
      gArrayjson = JSON.stringify(groupArray);
      fs.writeFile("./data/groups.json", gArrayjson, function (err) {
        if (err) throw err;
      });
      res.send({ ok: true });
    }
  });
};
