const DenunciasController = require('../controllers/denuncias-controller');
const denuncias = new DenunciasController();

module.exports = app => {
    app.route(DenunciasController.rotas().denuncias)
        .get(denuncias.listar());
};