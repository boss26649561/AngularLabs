var fs = require("fs");

module.exports = function (req, res) {
  fs.readFile("./data/groups.json", "utf8", function (err, data) {
    if (err) throw err;
    let GroupArray = JSON.parse(data);
    console.log(GroupArray);
    res.send({ ok: true, Groups: GroupArray });
  });
};
