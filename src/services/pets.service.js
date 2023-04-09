const Pets = require('../models/pets.model');

const getAllPets = () => Pets.getAllPets();
const getPetByName = (name) => Pets.getPetByName(name);
const newPet = (name, breed, birthday, codTutor) => Pets.newPet(name, breed, birthday, codTutor);

module.exports = {  getAllPets, getPetByName, newPet };
