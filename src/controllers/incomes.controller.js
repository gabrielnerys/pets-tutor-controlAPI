const Incomes = require('../services/incomes.service');

const getAllIncomes = async (_req, res) => {
  const allIncomes = await Incomes.getAllIncomes();
  if (!allIncomes) return res.status(400).json({ message: 'Não foi possível completar sua solicitação' });
  return res.status(200).json(allIncomes);
};

module.exports = { getAllIncomes };
