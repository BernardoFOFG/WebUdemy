select * from cidades cid inner join prefeitos pref on cid.id = pref.cidade_id;
select * from cidades cid left join prefeitos pref on cid.id = pref.cidade_id;
select * from cidades cid right join prefeitos pref on cid.id = pref.cidade_id;


select * from cidades cid left join prefeitos pref on cid.id = pref.cidade_id
UNION
select * from cidades cid right join prefeitos pref on cid.id = pref.cidade_id;
