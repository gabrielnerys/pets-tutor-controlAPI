const Tutors = require('../models/tutors.model');

const getAllTutors = () => Tutors.getAllTutors();
const getTutorByName = (name) => Tutors.getTutorByName(name);
const newTutor = (name, lastname, celphone, address) => Tutors.newTutor(name, lastname, celphone, address);

module.exports = { getAllTutors, getTutorByName, newTutor };
