-- Buscando todos os estados
select * from estados

-- Filtrando as colunas
select nome, sigla from estados

-- Filtrando as colunas, e pegando apenas os estados SUL
select nome, sigla from estados where regiao = 'Sul'

-- Filtrando as colunas e filtrando pela população
select nome, sigla, populacao as 'Populacao do Estado' from estados where populacao >= 10 order by populacao

