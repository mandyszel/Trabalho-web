const conexao = require("../config/conexao.js");

const AtividadeSchema = new conexao.Schema({
  atividadeidentificador: String,
  nome: String,
  duracao: String,
  local: String,
  pontuacao: String,
  numparticipantes: String,
  ano: String

});

module.exports = conexao.model("Atividade", AtividadeSchema);
