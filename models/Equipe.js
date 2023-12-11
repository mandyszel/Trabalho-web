const conexao = require("../config/conexao.js");

const EquipeSchema = new conexao.Schema({
  equipeidentificador: String,
  nome: String,
  cor: String,
  ano: String,
  integrantes: String

});

module.exports = conexao.model("Equipe", EquipeSchema);
