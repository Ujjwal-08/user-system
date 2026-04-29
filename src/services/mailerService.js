function sendPasswordResetEmail(email, token) {
  console.log("Sending reset email to:", email);
  console.log("Token:", token);
}

module.exports = {
  sendPasswordResetEmail
};