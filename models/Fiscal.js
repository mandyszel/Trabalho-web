const conexao = require("../config/conexao.js");

const FiscalSchema = new conexao.Schema({
  identificador: String,
  nome: String
});

module.exports = conexao.model("Fiscal", FiscalSchema);
