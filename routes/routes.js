const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");
const multer = require("multer");
const upload = multer({ dest: "./public" });

router.get("/", controller.abreindex);

// Rota para abrir formulário de adicionar aluno
router.get("/addaluno", controller.abrealuno);
router.post("/addaluno", upload.single("foto"), controller.addaluno);
router.get("/lstaluno", controller.listaraluno);

router.get("/addequipe", controller.abreaddequipe);
router.post("/addequipe", controller.addequipe);
router.get("/lstequipe", controller.lstequipe);
router.post("/lstequipe", controller.pesquisaequipe);
router.get("/edtequipe/:id", controller.abreedtequipe);
router.post("/edtequipe/:id", controller.edtequipe);
router.get("/delequipe/:id", controller.delequipe);

router.get("/addfiscal", controller.abreaddfiscal);
router.post("/addfiscal", controller.addfiscal);
router.get("/lstfiscal", controller.lstfiscal);
router.post("/lstfiscal", controller.pesquisafiscal);
router.get("/edtfiscal/:id", controller.abreedtfiscal);
router.post("/edtfiscal/:id", controller.edtfiscal);
router.get("/delfiscal/:id", controller.delfiscal);


router.get("/addatividade", controller.abreatividade);
router.post("/addatividade", controller.addatividade);
router.get("/lstatividade", controller.listaratividade);
router.post("/lstatividade", controller.pesquisaratividade);
router.get("/edtatividade/:id", controller.abreedtatividade);
router.post("/edtatividade/:id", controller.edtatividade);
router.get("/delatividade/:id", controller.delatividade);

module.exports = router;



