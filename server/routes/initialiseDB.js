module.exports = function (db, app) {
  app.post("/api/initialise", function (req, res) {
    const collection = db.collection("users");
    collection.insertOne(
      [
        {
          username: "Super",
          email: "super@gmail.com",
          password: "123",
          role: "Super Admin",
        },
        {
          username: "test2",
          email: "test2@gmail.com",
          password: "123",
          role: "Group Admin",
        },
        {
          username: "test3",
          email: "test3@gmail.com",
          password: "123",
          role: "Group Assistant",
        },
        {
          username: "test4",
          email: "test4@gmail.com",
          password: "123",
          role: "User",
        },
        {
          username: "test5",
          email: "test5@gmail.com",
          password: "123",
          role: "User",
        },
      ],
      (err, dbres) => {
        if (err) throw err;
      }
    );

    const collection1 = db.collection("groups");
    collection1.insertOne(
      [
        {
          name: "Sports",
          users: ["test3", "test4", "test5"],
          channels: [1, 2, 4],
        },
        { name: "Gaming", users: ["test5"], channels: [3, 5, 6] },
        { name: "TestGroup", users: [], channels: [] },
      ],

      (err, dbres) => {
        if (err) throw err;
      }
    );

    const collection2 = db.collection("channel");
    collection2.insertOne(
      [
        { id: 1, Group: "Sports", Chat: ["hello", "hey", "test"] },
        { id: 2, Group: "Sports", Chat: [] },
        { id: 3, Group: "Gaming", Chat: [] },
        { id: 4, Group: "Sports", Chat: [] },
        { id: 5, Group: "Gaming", Chat: [] },
        { id: 6, Group: "Coding", Chat: [] },
        { id: 6, Group: "Gaming", Chat: [] },
        { id: 7, Group: "TestGroup", Chat: [] },
      ],

      (err, dbres) => {
        if (err) throw err;
      }
    );
  });
};
