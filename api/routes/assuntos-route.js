const AssuntosController = require('../controllers/assuntos-controller');
const assuntos = new AssuntosController();

module.exports = app => {
    app.route(AssuntosController.rotas().assuntos)
        .get(assuntos.listar());
};