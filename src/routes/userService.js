const repo = require("../db/userRepo");


function createUser(data) {
  return repo.save(data);
}


function create(data) {
  return createUser(data);
}

function getUsers() {
  return repo.findAll();
}

module.exports = { createUser, create, getUsers };