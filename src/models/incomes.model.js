const connection = require('./connection');

const getAllIncomes = async () => {
  const query = `
  SELECT id_compra AS IdCompra,
  cod_cliente AS CodCliente,
  cod_ativo AS CodAtivo,
  qtde_comprada AS QtdeComprada
  FROM StockMarketAPI.Compra;`;
  const [allPurchases] = await connection.execute(query);
  return allPurchases;
}

module.exports = { getAllIncomes };
