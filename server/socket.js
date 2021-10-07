module.exports = {
  connect: function (io, PORT) {
    io.on("connect", (socket) => {
      console.log("User connection on port" + PORT + " : " + socket.id);

      socket.on("message", (message) => {
        io.emit("message", message);
      });
      socket.on("user", (user) => {
        io.emit("user", user);
      });
    });
  },
};
