-- Soma populacional por região
SELECT
  regiao as 'Região',
  sum(populacao) as Total_Populacional
  from estados
  group by regiao
  order by Total_Populacional desc

-- Soma Populacional Geral
SELECT
  sum(populacao) as Total_Populacional from estados