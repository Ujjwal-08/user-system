
function validateUser(data) {
  if (!data.email) throw new Error("email required");
}
module.exports = { validateUser };