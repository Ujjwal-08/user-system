let store = {};

function set(key, value) {
  store[key] = value;
}

function get(key) {
  return store[key]; // no expiration logic
}

module.exports = { set, get };