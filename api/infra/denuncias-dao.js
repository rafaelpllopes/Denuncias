const db = require('../config/database');

class DenunciasDao {
    constructor() {
        this.db = db;
    }

    getDenuncias(page) {
        const maxRows = 30;
        
        const from = (page -1) * maxRows;
        
        let limitQuery = '';

        if (page) limitQuery = `LIMIT ${from}, ${maxRows}`;

        return new Promise((resolve, reject) => {
            this.db.connect();
            let query = `SELECT p.numero AS numero_protocolo, 
                p.ano AS ano_protocolo, 
                d.id_denuncia AS id_denuncia, 
                a.assunto AS assunto, 
                d.data AS data, 
                d.hora AS hora, 
                u.nome AS unidade FROM denuncias d 
                INNER JOIN unidades u ON d.id_unidade = u.id_unidade 
                INNER JOIN protocolo p ON p.id_denuncia = d.id_denuncia 
                INNER JOIN assuntos a ON d.id_assunto = a.id_assunto 
                ORDER BY p.ano DESC, p.numero DESC 
                ${limitQuery}`;
            this.db.query(query, (error, results, fields) => {
                    if (error) {
                        reject('Não foi possivel carregar os assuntos');
                    }
                    resolve(results);
                });
            this.db.end();
        });
    }
}

module.exports = DenunciasDao;