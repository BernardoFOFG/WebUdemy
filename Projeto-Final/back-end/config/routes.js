const admin = require("./admin");

module.exports = (app) => {
  app.post("/signUp", app.api.user.save);
  app.post("/signIn", app.api.auth.signIn);
  app.post("/validateToken", app.api.auth.validateToken);

  app
    .route("/users")
    .all(app.config.passport.authenticate())
    .post(admin(app.api.user.save))
    .get(admin(app.api.user.get));

  app
    .route("/users/:id")
    .all(app.config.passport.authenticate())
    .put(admin(app.api.user.save))
    .get(admin(app.api.user.getUserById));

  app
    .route("/categories")
    .all(app.config.passport.authenticate())
    .get(admin(app.api.category.get)) // Obtém todas as categorias
    .post(admin(app.api.category.save)); // Cria uma nova categoria

  // Cuidado com a ordem! Tem qeu vir antes da /categories/:id
  app
    .route("/categories")
    .all(app.config.passport.authenticate())
    .get(app.api.category.getTree);

  app
    .route("/categories/:id")
    .all(app.config.passport.authenticate())
    .get(app.api.category.getById) // Obtém uma categoria pelo ID
    .put(admin(app.api.category.save)) // Atualiza uma categoria pelo ID
    .delete(admin(app.api.category.remove)); // Remove uma categoria pelo ID

  app
    .route("/articles")
    .all(app.config.passport.authenticate())
    .post(admin(app.api.article.save))
    .get(admin(app.api.article.get));
  app
    .route("/articles/:id")
    .all(app.config.passport.authenticate())
    .put(admin(app.api.article.save))
    .delete(admin(app.api.article.remove))
    .get(app.api.article.getById);

  app
    .route("/categories/:id/articles")
    .all(app.config.passport.authenticate())
    .get(app.api.article.getByCategory);
};
