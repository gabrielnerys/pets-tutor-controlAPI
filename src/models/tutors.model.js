const connection = require('./connection');

const getAllTutors = async () => {
  const query = `
  SELECT cod_tutor AS Código,
    CONCAT(nome, ' ', sobrenome) AS Nome,
    telefone AS Telefone,
    endereco AS Endereço
   FROM controleclientes.tutores;`;
  const [allTutors] = await connection.execute(query);
  return allTutors;
};

const getTutorByName = async (name) => {
  const query = `
  SELECT cod_tutor AS Código,
  CONCAT(nome, ' ', sobrenome) AS Nome,
  telefone AS Telefone,
  endereco AS Endereço
  FROM controleclientes.tutores
  WHERE nome LIKE ?;`;
  const [tutorByName] = await connection.execute(query, [name]);
  return tutorByName[0];
};

const newTutor = async (name, lastname, celphone, address) => {
  const query = `INSERT INTO controleclientes.tutores (nome, sobrenome, telefone, endereco) values (?, ?, ?, ?)`;
  const newTutor = await connection.execute(query, [name, lastname, celphone, address]);
  return newTutor;
};

module.exports = { getAllTutors, getTutorByName, newTutor };
