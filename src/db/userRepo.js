let users = [];

function save(user) {
  users.push({
    id: Date.now(),
    email: user.email,
    username: user.name,
    passwordHash: user.password
  });
}

function findByEmail(email) {
  return users.find(u => u.email === email);
}

function updatePassword(userId, newPassword) {
  const user = users.find(u => u.id === userId);

  if (user) {
    user.password = newPassword;
  }
}

module.exports = {
  save,
  findByEmail,
  updatePassword
};