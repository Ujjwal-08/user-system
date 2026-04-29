
const service = require("../src/service/userService");

test("create user", () => {
  const user = service.createUser({ name: "test" });
  expect(user).toBeDefined();
});