const express = require('express');
const routes = express.Router();

const Tutors = require('../controllers/tutors.controller');
const Pets = require('../controllers/pets.controller');
const Incomes = require('../controllers/incomes.controller');


const { newTutorValidation } = require('../middlewares/newTutor.validation');
const { newPetValidation } = require('../middlewares/newPet.validation');

routes.get('/tutors', Tutors.getAllTutors);
routes.get('/tutors/:name', Tutors.getTutorByName);
routes.post('/tutors', newTutorValidation, Tutors.newTutor)

routes.get('/pets', Pets.getAllPets);
routes.get('/pets/:name', Pets.getPetByName);
routes.post('/pets', newPetValidation, Pets.newPet);

routes.get('/incomes', Incomes.getAllIncomes);

module.exports = routes;