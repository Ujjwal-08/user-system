const store = {};

function set(key, value) {
  store[key] = value;
}

function get(key) {
  return store[key];
}

function purgeExpired() {
  Object.keys(store).forEach(key => {
    if (store[key].expiresAt < Date.now()) {
      delete store[key];
    }
  });
}



module.exports = {
  set,
  get,
  purgeExpired
};