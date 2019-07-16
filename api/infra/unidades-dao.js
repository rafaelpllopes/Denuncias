const db = require('../config/database');

class UnidadesDao {
    constructor() {
        this.db = db;
    }

    getUnidades() {
        return new Promise((resolve, reject) => {
            this.db.connect();
            let query = 'SELECT * FROM unidades';

            this.db.query(query, (error, results, fields) => {
                    if (error) {
                        reject('Não foi possivel carregar as unidades');
                    }
                    resolve(results);
                });
            this.db.end();
        });
    }
}

module.exports = UnidadesDao;