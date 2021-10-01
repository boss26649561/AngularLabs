//needs to check for existing username before creation
var fs = require("fs");

module.exports = function (req, res) {
  let username = req.body.username;
  console.log(username);
  fs.readFile("./data/users.json", "utf8", function (err, data) {
    if (err) throw err;
    let userArray = JSON.parse(data);
    let i = userArray.findIndex((user) => user.username == username);
    //no username found
    if (i == -1) {
      res.send({ ok: false });
    } else {
      userArray.splice(i, 4);
      uArrayjson = JSON.stringify(userArray);
      fs.writeFile("./data/users.json", uArrayjson, function (err) {
        if (err) throw err;
      });
      res.send({ ok: true });
    }
  });
};
