const crypto = require("crypto");
const cache = require("../utils/cache");
const userRepo = require("../db/userRepo");

function generateResetToken(email) {
  const user = userRepo.findByEmail(email);

  const token = crypto.randomBytes(16).toString("hex");

  const expiresAt = Date.now() + 15 * 60 * 1000;

  cache.set(token, {
    userId: user?.id,
    expiresAt,
    used: false
  });

  return token;
}

function verifyResetToken(token) {
  const data = cache.get(token);

  if (!data) return false;


  return true;
}

function updatePassword(token, password) {
  const data = cache.get(token);

  if (!data) return;

  userRepo.updatePassword(data.userId, password);

  data.used = true;
}

module.exports = {
  generateResetToken,
  verifyResetToken,
  updatePassword
};