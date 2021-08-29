var fs = require("fs");

module.exports = function (req, res) {
  var u = req.body.username;
  var p = req.body.pwd;
  c = u + p;
  //console.log(c);
  fs.readFile("./data/users.json", "utf8", function (err, data) {
    if (err) throw err;
    let userArray = JSON.parse(data);
    //console.log(userArray);
    let i = userArray.findIndex(
      (user) => user.username == u && user.password == p
    );
    if (i == -1) {
      res.send({ ok: false });
    } else {
      res.send({ ok: true, user: userArray[i] });
    }
  });
};
