var fs = require("fs");

module.exports = function (req, res) {
  fs.readFile("./data/users.json", "utf8", function (err, data) {
    if (err) throw err;
    let Userdata = JSON.parse(data);
    let userArray = [];
    for (const index in Userdata) {
      userArray.push(Userdata[index].username);
    }
    res.send({ ok: true, Users: userArray });
  });
};
