const connection = require('./connection');

const getAllPets = async () => {
  const query = `
  SELECT p.cod_pet AS Código,
    p.nome AS 'Nome do pet',
    p.raca AS Raça,
    p.data_nascimento AS 'Data de Nascimento',
    CONCAT(t.nome, ' ', t.sobrenome) AS Tutor,
    t.telefone as Telefone
  FROM controleclientes.pets as p
  RIGHT JOIN controleclientes.tutores as t
  ON p.cod_tutor = t.cod_tutor
  ORDER BY Código;`;
  const [allPets] = await connection.execute(query);
  return allPets;
};

const getPetByName = async (name) => {
  const query = `
  SELECT p.cod_pet,
	  p.nome AS 'Nome do pet',
	  p.raca AS Raça,
	  p.data_nascimento AS 'Data de Nascimento',
    CONCAT(t.nome, ' ', t.sobrenome) AS Tutor,
    t.telefone as Telefone
  FROM controleclientes.pets as p
  RIGHT JOIN controleclientes.tutores as t
  ON p.cod_tutor = t.cod_tutor
  WHERE p.nome LIKE ?;`;
  const [petByName] = await connection.execute(query, [name]);
  return petByName[0];
};

const newPet = async (name, breed, birthday, codTutor) => {
  const query = `INSERT INTO controleclientes.pets (nome, raca, data_nascimento, cod_tutor) values (?, ?, ?, ?)`;
  const newPet = await connection.execute(query, [name, breed, birthday, codTutor]);
  return newPet;
};

module.exports = { getAllPets, getPetByName, newPet };
