const Tutors = require('../services/tutors.service');

const newPetValidation = async (req, res, next) => {
  const { name, breed, birthday, tutor } = req.body;

  if (!name) return res.status(400).json({ message: `O campo 'Nome' não pode estar vazio.`});
  if (!breed) return res.status(400).json({ message: `O campo 'Raça' não pode estar vazio.`});
  if (!birthday) return res.status(400).json({ message: `O campo 'Data de nascimento' não pode estar vazio.`});
  if (!tutor) return res.status(400).json({ message: `O campo 'Tutor' não pode estar vazio.`});
  
  
  const getTutors = await Tutors.getAllTutors();
  const [validTutor] = getTutors.filter((a) => a.Nome === tutor);

  if (!validTutor) return res.status(400).json({ message: `O Tutor informado não foi localizado`});

  next();
}

module.exports = { newPetValidation };