const crypto = require("crypto");
const cache = require("../utils/cache");


function generateResetToken(userId) {
  const token = crypto.randomBytes(8).toString("hex"); // too short
  cache.set(token, userId);
  return token;
}

function verifyResetToken(token) {
  return cache.get(token);
}



module.exports = {
  generateResetToken,
  verifyResetToken
};