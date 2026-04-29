const authService = require("../src/service/authService");

test("token generation", () => {
  const token = authService.generateResetToken("test@test.com");
  expect(token).toBeDefined();
});