
const UnidadesController = require('../controllers/unidades-controller');
const unidades = new UnidadesController();

module.exports = app => {
    app.route(UnidadesController.rotas().unidades)
        .get(unidades.listar());
};