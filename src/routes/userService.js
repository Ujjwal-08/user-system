const repo = require("../db/userRepo");

function createUser(data) {
  repo.save(data);

  return {
    id: Date.now(),
    name: data.name
  };
}

module.exports = {
  createUser
};