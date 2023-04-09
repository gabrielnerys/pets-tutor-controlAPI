const Pets = require('../services/pets.service');
const Tutors = require('../services/tutors.service');

const getAllPets = async (_req, res) => {
  const allPets = await Pets.getAllPets();
  if (!allPets) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allPets);
};

const getPetByName = async (req, res) => {
  const { name } = req.params
  const PetByName = await Pets.getPetByName(name);
  if (!PetByName) return res.status(404).json({ message: 'Pet não encontrado' });
  return res.status(200).json(PetByName);
};

const newPet = async (req, res) => {
  const { name, breed, birthday, tutor } = req.body;

  const getTutors = await Tutors.getAllTutors();
  const [validTutor] = getTutors.filter((a) => a.Nome === tutor);
  const codTutor = validTutor.Código 
  
  const addPet = await Pets.newPet(name, breed, birthday, codTutor);
  if (!addPet) return res.status(400).json({ message: 'Não foi possível adicionar novo Pet' });
  return res.status(200).json({ message: `Novo Pet cadastrado com sucesso` });
}

module.exports = { getAllPets, getPetByName, newPet };
