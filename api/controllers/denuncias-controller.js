const DenunciasDao = require('../infra/denuncias-dao');

class AssuntosController {

    static rotas() {
        return {
            denuncias: '/denuncias',
        };
    }

    listar() {
        return async (req, res) => {
            let page = 2;
            const resultado = await new DenunciasDao().getDenuncias(page);
            res.json(resultado);
        };
    }

    adicionar() {

    }
}

module.exports = AssuntosController;