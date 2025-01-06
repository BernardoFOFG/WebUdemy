-- alterando a coluna cnpj para varchar(14) para poder inserir os dados corretamente
ALTER TABLE empresas MODIFY cnpj VARCHAR
(14)

INSERT INTO empresas
  (nome, cnpj)
VALUES
  ('Bradesco', '95694186000132'),
  ('Vale', '27887148000146'),
  ('Cielo', '01598317000134'),
  ('Itaú', '60701190000104'),
  ('Ambev', '02256984000118'),
  ('Petrobras', '03300061000141'),
  ('Natura', '71654856000189'),
  ('Banco do Brasil', '00000000000191'),
  ('Banco Santander', '90400888000142'),
  ('Banco Safra', '58160789000128'),
  ('Banco Inter', '00000000000192'),
  ('Banco Original', '00000000000193'),
  ('Banco Pan', '00000000000194'),
  ('Banco Neon', '00000000000195'),
  ('Banco BMG', '00000000000196'),
  ('Banco C6', '00000000000197'),
  ('Banco Modal', '00000000000198'),
  ('Banco Daycoval', '00000000000199'),
  ('Banco Sofisa', '00000000000200'),
  ('Banco Pine', '00000000000201'),
  ('Banco ABC', '00000000000202'),
  ('Banco Bari', '00000000000203'),
  ('Banco BPP', '00000000000204'),
  ('Banco Bonsucesso', '00000000000205'),
  ('Banco BVA', '00000000000206'),
  ('Banco Cruzeiro do Sul', '00000000000207'),
  ('Banco Fibra', '00000000000208'),
  ('Banco Ficsa', '00000000000209'),
  ('Banco Gerador', '00000000000210'),
  ('Banco Indusval', '00000000000211'),
  ('Banco Mercantil', '00000000000212'),
  ('Banco Panamericano', '00000000000213'),
  ('Banco Pine', '00000000000214'),
  ('Banco Prosper', '00000000000215'),
  ('Banco Real', '00000000000216'),
  ('Banco Rural', '00000000000217'),
  ('Banco Safra', '00000000000218'),
  ('Banco Sofisa', '00000000000219'),
  ('Banco Topázio', '00000000000220')


