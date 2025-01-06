const bycrpy = require("bcrypt");

module.exports = (app) => {
  const { existOrError, notExistOrError, equalsOrError } = app.api.validation;

  const encryptPassword = (password) => {
    // Encriptografando a senha
    const salt = bycrpy.genSaltSync(10);
    return bycrpy.hashSync(password, salt);
  };

  const save = async (req, res) => {
    const user = { ...req.body };
    if (req.params.id) user.id = req.params.id;

    if (!req.originalUrl.startsWith("/users")) user.admin = false;

    if (!req.user || !req.user.admin) user.admin = false;

    try {
      existOrError(user.name, "Nome não informado");
      existOrError(user.email, "E-mail não informado");
      existOrError(user.password, "Senha não informada");
      existOrError(user.confirmPassword, "Confirmação de senha inválida");
      equalsOrError(user.password, user.confirmPassword, "Senhas não conferem");

      const userFromDB = await app
        .db("users")
        .where({ email: user.email })
        .first();
      if (!user.id) {
        notExistOrError(userFromDB, "Usuário já cadastrado");
      }
    } catch (error) {
      return res.status(400).send(error); // Código do erro 400: Bad Request, junto com a mensagem de erro
    }

    user.password = encryptPassword(user.password);
    delete user.confirmPassword;

    if (user.id) {
      app
        .db("users")
        .updated(user)
        .where({ id: user.id })
        .whereNull("deletedAt")
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    } else {
      app
        .db("users")
        .insert(user)
        .then((_) => res.status(204).send())
        .catch((err) => res.status(500).send(err));
    }
  };

  const get = (req, res) => {
    // Função para listar todos os usuários
    app
      .db("users")
      .select("id", "name", "email", "admin")
      .whereNull("deletedAt") // Só pode retornar os usuários que não tiver deletedAt
      .then((users) => res.json(users))
      .catch((err) => res.status(500).send(err));
  };

  const getUserById = (req, res) => {
    app
      .db("users")
      .select("id", "name", "email", "admin")
      .where({ id: req.params.id })
      .whereNull("deletedAt")
      .first()
      .then((user) => {
        try {
          existOrError(user, "Usuário não encontrado.");
          res.json(user);
        } catch (msg) {
          res.status(404).send(msg); // Código 404 para "Not Found"
        }
      })
      .catch((err) => res.status(500).send(err));
  };

  const remove = async (req, res) => {
    try {
      const articles = await app
        .db("articles")
        .where({ userId: req.params.id });

      notExistOrError(
        articles,
        "Usuário possui artigos! Para deletar usuário é necessário primeiro deletar os artigos."
      );

      const rowsUpdated = await app
        .db("users")
        .updated({ deletedAt: new Date() })
        .where({ id: req.params.id });

      existOrError(rowsUpdated, "Usuário não encontrado!");

      res.status(204).send();
    } catch (error) {
      res.status(400).send(error);
    }
  };

  return { save, get, getUserById, remove };
};
