const Aluno = require("../models/Aluno");
const Equipe = require("../models/Equipe");
const Fiscal = require("../models/Fiscal"); // Certifique-se de ter importado corretamente o modelo Fiscal
const Atividade = require("../models/Atividade");
const { Error } = require("mongoose");


function abreindex(req, res) {
  res.render("index");
}

function abrealuno(req, res) {
  res.render("addaluno");
}

function addaluno(req, res) {
  let matricula = req.body.matricula;
  let nome = req.body.nome;
  let identidade = req.body.identidade;
  let cpf = req.body.cpf;
  let email = req.body.email;

  let aluno = new Aluno({
    matricula: matricula,
    nome: nome,
    identidade: identidade,
    cpf: cpf,
    email: email,
  });
  aluno.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addaluno");
  });
}

function listar(req, res) {
  Aluno.find({}).then(function (alunos,err) {
    if(err){
      res.send(err.message)
    }else{
    res.render("lstaluno.ejs", { alunos: alunos });
    }
  });
}

function pesquisaaluno(req, res) {
  Aluno
    .find({ nome: new RegExp(req.body.pesquisar, "i") })
    .then(function (equipe, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstaluno.ejs", { aluno: aluno });
      }
    });
}

function abreaddequipe(req, res) {
  res.render("addequipe.ejs");
}

function addequipe(req, res) {
  let equipe = new Equipe({
    equipeidentificador: req.body.equipeidentificador,
    nome: req.body.nome,
    cor: req.body.cor,
    ano: req.body.ano,
    integrantes: req.body.integrantes,
  });
  equipe.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addequipe");
  });
}

function lstequipe(req, res) {
  Equipe.find({}).then(function (equipe, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstequipe.ejs", { equipe: equipe });
    }
  });
}

function pesquisaequipe(req, res) {
  Equipe
    .find({ nome: new RegExp(req.body.pesquisar, "i") })
    .then(function (equipe, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstequipe.ejs", { equipe: equipe });
      }
    });
}

function abreedtequipe(req, res) {
  Equipe.findById(req.params.id).then(function (equipe, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtequipe.ejs", { equipe: equipe });
    }
  });
}

function edtequipe(req, res) {
  equipe
    .findByIdAndUpdate(req.params.id, {
    equipeidentificador: req.body.equipeidentificador,
    nome: req.body.nome,
    cor: req.body.cor,
    ano: req.body.ano,
    integrantes: req.body.integrantes,
    })
    .then(function (equipe, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.redirect("/lstequipe");
      }
    });
}

function delequipe(req, res) {
  equipe.findByIdAndDelete(req.params.id).then(function (equipe, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstequipe");
    }
  });
}

function abreaddfiscal(req, res) {
  Fiscal.find({}).then(function (fiscal, err) { // Use o modelo Fiscal aqui, em vez de usar `fiscal.find({})`
    if (err) {
      res.send(err.message);
    } else {
      res.render("addfiscal.ejs", { fiscal: fiscal });
    }
  });
}

function addfiscal(req, res) {
  let fiscal = new Fiscal({
    fiscalidentificador: req.body.fiscalidentificador,
    nome: req.body.nome
  });
  fiscal.save().then(function (docs, err) {
    console.log(docs);
    res.redirect("/addfiscal");
  });
}

function lstfiscal(req, res) {
  Fiscal.find({}).then(function (fiscal, err) { 
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstfiscal.ejs", { fiscal: fiscal });
    }
  });
}

function pesquisafiscal(req, res) {
  Fiscal
    .find({ fiscalidentificador: new RegExp(req.body.pesquisar, "i") })
    .then(function (fiscal, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstfiscal.ejs", { fiscal: fiscal });
      }
    });
}

function abreedtfiscal(req, res) {
  Fiscal.findById(req.params.id).then(function (fiscal, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtfiscal.ejs", { fiscal: fiscal });
    }
  });
}

function edtfiscal(req, res) {
  Fiscal
    .findByIdAndUpdate(req.params.id, {
      fiscalidentificador: req.body.fiscalidentificador,
    })
    .then(function (fiscal, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.redirect("/lstfiscal");
      }
    });
}

function delfiscal(req, res) {
  Fiscal.findByIdAndDelete(req.params.id).then(function (fiscal, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstfiscal");
    }
  });
}

function abreaddatividade(req, res) {
  Atividade.find({}).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("addatividade.ejs", { atividade: atividade });
    }
  });
}

function addatividade(req, res) {
  let atividade = new Atividade({
    atividadeidentificador: req.body.atividadeidentificador,
    nome: req.body.nome,
    duracao: req.body.duracao,
    local: req.body.local,
    pontuacao: req.body.pontuacao,
    numparticipantes: req.body.numparticipantes,
    ano: req.body.ano
  });
  atividade.save().then(function (docs, err) {
    if (err) {
      console.log(err);
      res.send(err.message);
    } else {
      console.log(docs);
      res.redirect("/addatividade");
    }
  });
}

function lstatividade(req, res) {
  Atividade.find({}).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstatividade.ejs", { atividade: atividade });
    }
  });
}

function pesquisaatividade(req, res) {
  Atividade
    .find({ atividadeidentificador: new RegExp(req.body.pesquisar, "i") })
    .then(function (atividade, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstatividade.ejs", { atividade: atividade });
      }
    });
}

function abreedtatividade(req, res) {
  Atividade.findById(req.params.id).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtatividade.ejs", { Atividade: atividade });
    }
  });
}

function edtatividade(req, res) {
  Atividade
    .findByIdAndUpdate(req.params.id, {
      atividadeidentificador: req.body.atividadeidentificador,
      nome: req.body.nome,
      duracao: req.body.duracao,
      local: req.body.local,
      pontuacao: req.body.pontuacao,
      numparticipantes: req.body.numparticipantes,
      ano: req.body.ano
    })
    .then(function (atividade, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.redirect("/lstatividade");
      }
    });
}

function delatividade(req, res) {
  Atividade.findByIdAndDelete(req.params.id).then(function (atividade, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstatividade");
    }
  });
}


module.exports = {
  abreindex,
  abrealuno,
  addaluno,
  listar,
  pesquisaaluno,
  abreaddequipe,
  addequipe,
  lstequipe,
  pesquisaequipe,
  delequipe,
  abreedtequipe,
  edtequipe,
  abreaddfiscal,
  addfiscal,
  lstfiscal,
  pesquisafiscal,
  delfiscal,
  abreedtfiscal,
  edtfiscal,
  abreaddatividade,
  addatividade,
  lstatividade,
  pesquisaatividade,
  abreedtatividade,
  edtatividade,
  delatividade
};
