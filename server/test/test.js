const API = "http://localhost:3000";
var app = require("../server.js");
var chai = require("chai"),
  chaiHttp = require("chai-http");

let should = chai.should();
chai.use(chaiHttp);

describe("Channel", () => {
  describe("post api/channels", () => {
    it("it should add a channel and return property ok", (done) => {
      chai
        .request(API)
        .post("/api/channels")
        .send({ id: "7", name: "Sports" })
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.property("ok");
          done();
        });
    });
  });
});
describe("Chats", () => {
  describe("post api/chat", () => {
    it("it should grab chat and return property ok,chat", (done) => {
      chai
        .request(API)
        .post("/api/chat")
        .send({ id: "2" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("ok");
          res.body.should.have.property("chat");

          done();
        });
    });
  });
  describe("put api/chat", () => {
    it("it should update chat and return property ok", (done) => {
      chai
        .request(API)
        .put("/api/chat")
        .send({ id: "7", chat: "test message" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("ok");
          done();
        });
    });
  });
});
describe("Group", () => {
  describe("post api/group", () => {
    it("it should return ok,id and group list", (done) => {
      chai
        .request(API)
        .post("/api/Group")
        .send({ username: "Super" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("ok");
          done();
        });
    });
  });
});

describe("Groups", () => {
  describe("get api/groups", () => {
    it("it should return products", (done) => {
      chai
        .request(API)
        .get("/api/groups")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("ok");
          res.body.should.have.property("Groups");
          res.body.should.have.property("id");
          done();
        });
    });
  });
  describe("post api/groups", () => {
    it("it should create a new group and return ok", (done) => {
      chai
        .request(API)
        .post("/api/groups")
        .send({ name: "Test Group" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("ok");
          done();
        });
    });
  });
  describe("put api/groups", () => {
    it("it should delete a group and return ok", (done) => {
      chai
        .request(API)
        .put("/api/groups")
        .send({ username: "Test Group" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("ok");
          done();
        });
    });
  });
});
describe("Login", () => {
  describe("post api/login", () => {
    it("it should check then return ok and userdata", (done) => {
      chai
        .request(API)
        .post("/api/login")
        .send({ username: "TestUser", pwd: "123" })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("ok");
          done();
        });
    });
  });
});
