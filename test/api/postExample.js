const request = require("supertest");
const baseUrl = require("../../env");

describe("Post Request Example", () => {
  it("Success Create User", async () => {
    const response = request(baseUrl()).post("/user").send({
      id: 12345,
      username: "myskill-auto",
      firstName: "myskill",
      lastName: "myskil",
      email: "myskill@mailsac.com",
      password: "myskilll123",
      phone: "08981389137",
      userStatus: 1,
    });
    console.log((await response).status);
    console.log((await response).body);
  });
});
