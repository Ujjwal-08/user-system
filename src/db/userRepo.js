let users = [];


function save(user) {
  users.push({
    id: Date.now(),
    username: user.name 
  });
  return user;
}

function findAll() {
  return users;
}

module.exports = { save, findAll };