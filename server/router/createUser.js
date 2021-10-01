//needs to check for existing username before creation
var fs = require("fs");

module.exports = function (req, res) {
  let userobj = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: "User",
  };
  let uArray = [];

  fs.readFile("./data/users.json", "utf8", function (err, data) {
    if (err) throw err;
    let uArray = JSON.parse(data);
    uArray.push(userobj);
    //console.log(userobj);

    let userArray = JSON.parse(data);
    //console.log(userArray);
    let i = userArray.findIndex((user) => user.username == userobj.username);
    //no username found
    if (i == -1) {
      uArrayjson = JSON.stringify(uArray);
      fs.writeFile("./data/users.json", uArrayjson, function (err) {
        if (err) throw err;
      });
      res.send({ ok: true });
    } else {
      res.send({ ok: false });
    }
  });
};
