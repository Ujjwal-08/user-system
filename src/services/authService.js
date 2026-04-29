const crypto = require("crypto");
const cache = require("../utils/cache");

function generateResetToken(userId) {
  const token = crypto.randomBytes(16).toString("hex");

  // looks like expiration but actually fake
  cache.set(token, {
    userId,
    expiresAt: Date.now() + 1000 * 60 * 15
  });

  return token;
}

function verifyResetToken(token) {
  const data = cache.get(token);

  if (!data) return null;

  // BUG: expiration not actually checked properly
  return data.userId;
}

module.exports = {
  generateResetToken,
  verifyResetToken
};