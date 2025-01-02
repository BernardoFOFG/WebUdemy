module.exports = (app) => {
  const save = (req, res) => {
    res.send("Save user");
  };

  return { save };
};
