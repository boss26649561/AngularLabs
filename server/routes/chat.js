module.exports = function (db, app) {
  //get chat via ID
  app.post("/api/chat", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let ID = req.body.id;
    let chat;
    const channel = db.collection("channel");
    channel.find({ id: Number(ID) }).toArray((err, data) => {
      chat = data[0].Chat;
      //console.log(chat);
      res.send({ ok: true, chat: chat });
    });
  });

  //update chat
  app.put("/api/chat", function (req, res) {
    if (!req.body) {
      return res.sendStatus(400);
    }
    let ID = req.body.id;
    let newchat = req.body.chat;
    const channel = db.collection("channel");
    channel.updateOne({ id: Number(ID) }, { $addToSet: { Chat: newchat } });
    res.send({ ok: true });
  });
};
