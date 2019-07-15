const UnidadesDao = require('../infra/unidades-dao');

class UnidadesController {

    static rotas() {
        return {
            unidades: '/unidades',
        };
    }

    listar() {
        return async (req, res) => {
            const resultado = await new UnidadesDao().getUnidades();
            res.json(resultado);
        };
    }
}

module.exports = UnidadesController;