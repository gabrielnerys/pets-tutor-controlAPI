const Tutors = require('../services/tutors.service');

const getAllTutors = async (_req, res) => {
  const allTutors = await Tutors.getAllTutors();
  if (!allTutors) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allTutors);
};

const getTutorByName = async (req, res) => {
  const { name } = req.params
  const TutorByName = await Tutors.getTutorByName(name);
  if (!TutorByName) return res.status(404).json({ message: 'Tutor não encontrado' });
  return res.status(200).json(TutorByName);
};

const newTutor = async (req, res) => {
  const { name, lastname, celphone, address } = req.body;
  const addTutor = await Tutors.newTutor(name, lastname, celphone, address);
  if (!addTutor) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json({ message: `Novo tutor cadastrado com sucesso` });
}

module.exports = { getAllTutors, getTutorByName, newTutor };
