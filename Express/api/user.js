function save(req, res) {
  res.send("Save user");
}

function get(req, res) {
  res.send("Get user");
}

function remove(req, res) {
  res.send("Remove user");
}

module.exports = { save, get, remove };
