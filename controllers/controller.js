const Aluno = require("../models/Aluno");
const Equipe = require("../models/Equipe");
const Fiscal = require("../models/Fiscal");
const Atividade = require("../models/Atividade")

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

  let eleitor = new Aluno({
    matricula: matricula,
    nome: nome,
    identidade: identidade,
    cpf: cpf,
    email: email,
  });

  aluno.save().then(function (docs) {
    res.send("Salvo");
  });
}

function listar(req, res) {
  Aluno.find({}).then(function (alunos) {
    res.render("lstaluno.ejs", { Alunos: alunos });
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
  equipe.find({}).then(function (equipe, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstequipe.ejs", { Equipe: equipe });
    }
  });
}

function pesquisaequipe(req, res) {
  equipe
    .find({ nome: new RegExp(req.body.pesquisar, "i") })
    .then(function (equipe, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstequipe.ejs", { Equipe: equipe });
      }
    });
}

function abreedtequipe(req, res) {
  equipe.findById(req.params.id).then(function (equipe, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtequipe.ejs", { Equipe: equipe });
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
  fiscal.find({}).then(function (fiscal, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("addfiscal.ejs", { Fiscal: fiscal });
    }
  });
}

function addefiscal(req, res) {
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
  fiscal.find({}).then(function (fiscal, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("lstfiscal.ejs", { Fiscal: fiscal });
    }
  });
}

function pesquisafiscal(req, res) {
  fiscal
    .find({ fiscalidentificador: new RegExp(req.body.pesquisar, "i") })
    .then(function (fiscal, err) {
      if (err) {
        res.send(err.message);
      } else {
        res.render("lstfiscal.ejs", { Fiscal: fiscal });
      }
    });
}

function abreedtfiscal(req, res) {
  fiscal.findById(req.params.id).then(function (fiscal, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.render("edtfiscal.ejs", { Fiscal: fiscal });
    }
  });
}

function edtfiscal(req, res) {
  fiscal
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
  fiscal.findByIdAndDelete(req.params.id).then(function (fiscal, err) {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect("/lstfiscal");
    }
  });
}

module.exports = {
  abreindex,
  abrealuno,
  addaluno,
  listar,
  abreaddequipe,
  addequipe,
  lstequipe,
  pesquisaequipe,
  delequipe,
  abreedtequipe,
  edtequipe,
  abreaddfiscal,
  addefiscal,
  lstfiscal,
  pesquisafiscal,
  delfiscal,
  abreedtfiscal,
  edtfiscal,
};
