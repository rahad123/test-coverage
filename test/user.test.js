const mocha = require("mocha");
const mongoose = require("mongoose");
const faker = require("faker");
const { assert } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { createUser } = require("../user/user.service");
const _p = require("../utils/asyncWrapper");
const app = require("../server");

chai.use(chaiHttp);

const mockDataForCreateUser = async (args = null) => {
  const userInput = {
    id: mongoose.Types.ObjectId,
    username: faker.lorem.words(),
    email: faker.internet.email(),
    password: faker.lorem.words(10),
  };

  const input = args ? args : userInput;
  const user = await createUser(input);
  return user;
};

describe("user test suit", () => {
  it("user can create", async () => {
    const userInput = await mockDataForCreateUser();
    const [err, res] = await _p(
      chai
        .request(app)
        .post("/graphql")
        .send({
          query: `mutation { createUser(createUserInput:
          { username: "${userInput.username}" email: "${userInput.email}" password: "${userInput.password}" } )
          { id username email password } }`,
        })
    );
    const user = res.body.data.createUser;
    assert.exists(user, "user should be an object");
    assert.equal(userInput.username, user.username, "username should be eqaul");
    assert.equal(userInput.email, user.email, "email should be equal");
    assert.equal(userInput.password, user.password, "password should be equal");
  });

  it("catch block check for create user", async () => {
    const userInput = await mockDataForCreateUser();
    const [err, res] = await _p(
      chai
        .request(app)
        .post("/graphql")
        .send({
          query: `mutation { createUser(createUserInput:
          { username: "${userInput.username}" email: "${userInput.email}" password: "${userInput.password}" } )
          { id username email password } }`,
        })
    );
    const user = res.body.errors;
    
  });

  it("user can update", async () => {
    const userInput = await mockDataForCreateUser();

    const updateData = {
      username: faker.lorem.words(5),
      email: faker.internet.email(),
      password: faker.lorem.words(7),
    };
    const [err, res] = await _p(
      chai
        .request(app)
        .post("/graphql")
        .send({
          query: `mutation { updateUser(updateUserInput:
          { id: "${userInput.id}" username: "${updateData.username}" email: "${updateData.email}" password: "${updateData.password}" } )
          { id username email password } }`,
        })
    );
    const user = res.body.data.updateUser;
    assert.exists(user, "user should be an object");
    assert.equal(
      updateData.username,
      user.username,
      "username should be eqaul"
    );
    assert.equal(updateData.email, user.email, "email should be equal");
    assert.equal(
      updateData.password,
      user.password,
      "password should be equal"
    );
  });

  it("user can getAll", async () => {
    const userInput = await mockDataForCreateUser();

    const [err, res] = await _p(
      chai.request(app).post("/graphql").send({
        query: `{ getUsers { id username email password } }`,
      })
    );
    const user = res.body.data.getUsers;
    assert.isArray(user, "user should be an array");
  });
});
