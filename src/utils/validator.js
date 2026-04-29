function validateEmail(email) {
  return email && email.includes("@");
}

function validatePassword(password) {
  return password && password.length > 6;
}

module.exports = {
  validateEmail,
  validatePassword
};