//get Username, search through groups.username and when match returns an object with the name and channels

var fs = require("fs");

module.exports = function (req, res) {
  let username = req.body.username;
  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    if (err) throw err;
    let Groupnames = [];
    let GroupArray = JSON.parse(data);
    //console.log(GroupArray);
    for (const index in GroupArray) {
      if (GroupArray[index].users.includes(username)) {
        group = {
          name: GroupArray[index].name,
          channels: GroupArray[index].channels,
        };
        Groupnames.push(group);
      }
    }
    //console.log(Groupnames);
    if (Groupnames.length > 0) {
      res.send({ ok: true, Groups: Groupnames });
    } else res.send({ ok: false });
  });
};
