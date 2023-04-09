const newTutorValidation = async (req, res, next) => {
  const { name, lastname, celphone, address } = req.body;

  if (!name) return res.status(400).json({ message: `O campo 'Nome' não pode estar vazio.`});
  if (!lastname) return res.status(400).json({ message: `O campo 'Sobrenome' não pode estar vazio.`});
  if (!celphone) return res.status(400).json({ message: `O campo 'Telefone' não pode estar vazio.`});
  if (!address) return res.status(400).json({ message: `O campo 'Endereço' não pode estar vazio.`});
  
  next();
}

module.exports = { newTutorValidation };