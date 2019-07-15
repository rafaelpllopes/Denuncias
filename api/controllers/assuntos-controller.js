const AssuntosDao = require('../infra/assuntos-dao');

class AssuntosController {

    static rotas() {
        return {
            assuntos: '/assuntos',
        };
    }

    listar() {
        return async (req, res) => {
            const resultado = await new AssuntosDao().getAssuntos();
            res.json(resultado);
        };
    }
}

module.exports = AssuntosController;