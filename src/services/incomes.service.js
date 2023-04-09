const Incomes = require('../models/incomes.model');

const getAllIncomes = () => Incomes.getAllIncomes(); 

module.exports = { getAllIncomes };
