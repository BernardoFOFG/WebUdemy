module.exports = (app) => {
  app.route("/users").post(app.api.user.save).get(app.api.user.get);
  app.route("/users/:id").put(app.api.user.save).get(app.api.user.getUserById);

  app
    .route("/categories")
    .get(app.api.category.get) // Obtém todas as categorias
    .post(app.api.category.save); // Cria uma nova categoria

  // Cuidado com a ordem! Tem qeu vir antes da /categories/:id
  app.route("/categories").get(app.api.category.getTree);

  app
    .route("/categories/:id")
    .get(app.api.category.getById) // Obtém uma categoria pelo ID
    .put(app.api.category.save) // Atualiza uma categoria pelo ID
    .delete(app.api.category.remove); // Remove uma categoria pelo ID

  app.route("/articles").post(app.api.article.save).get(app.api.article.get);
  app
    .route("/articles/:id")
    .put(app.api.article.save)
    .delete(app.api.article.remove)
    .get(app.api.article.getById);

  app.route("/categories/:id/articles").get(app.api.article.getByCategory);
};
