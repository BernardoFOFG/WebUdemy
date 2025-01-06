select * from estados, cidades where estado.id = cidades.estado_id


select c.nome as Cidade, e.nome as Estado, regiao as Regiao from estados e inner join cidades  c on e.id = c.estado_id