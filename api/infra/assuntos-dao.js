const db = require('../config/database');

class AssuntosDao {
    constructor() {
        this.db = db;
    }

    getAssuntos() {
        return new Promise((resolve, reject) => {
            this.db.connect();
            this.db.query('SELECT * FROM assuntos', (error, results, fields) => {
                    if (error) {
                        reject('Não foi possivel carregar os assuntos');
                    }
                    resolve(results);
                });
            this.db.end();
        });
    }
}

module.exports = AssuntosDao;