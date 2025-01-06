module.exports = (app, text) => {
  function save(req, res) {
    res.send("Saved product", text);
  }

  function get(req, res) {
    res.send("Get product", text);
  }

  function deleteProduct(req, res) {
    res.send("Delete product", text);
  }

  app.post("/product", save);
  app.get("/product", get);
  app.delete("/product", deleteProduct);
};
