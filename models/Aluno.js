const conexao = require("../config/conexao.js");

const AlunoSchema = new conexao.Schema({
  matricula: String,
  nome: String,
  identidade: String,
  cpf: String,
  email: String,
  equipeidentificador: [
    {
      type: conexao.Schema.Types.ObjectId,
      ref: "equipe",
    },
  ],
});

module.exports = conexao.model("Aluno", AlunoSchema);
