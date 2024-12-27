db.empresas
  .aggregate([
    { $match: { nome: "Bradesco" } },
    {
      $lookup: {
        from: "estados",
        localField: "estadoId", // Campo que esta dentro da coleção empresas que referencia a coleção estados
        foreignField: "_id", // Campo que esta dentro da coleção estados que referencia a coleção empresas
        as: "estado",
      },
    },
    { $unwind: "$estado" },
  ])
  .pretty();

db.empresas.aggregate([
  { $match: { nome: "Itaú" } },
  {
    $lookup: {
      from: "estados",
      localField: "cidadeId",
      foreignField: "cidades._id",
      as: "estado",
    },
  },
  { $unwind: "$estado" },
  { $unwind: "$estado.cidades" },
  {
    $addFields: {
      mesmaCidade: { $cmp: ["$estado.cidades._id", "$cidadeId"] },
    },
  },
  {
    $match: { mesmaCidade: 0 },
  },
]);
