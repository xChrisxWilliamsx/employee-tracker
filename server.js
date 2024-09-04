const { Pool } = require('pg');
const mainMenuOptions = require('./assets/js/questions/questions');

const pool = new Pool(
    {
        user: 'postgres',
        password: 'Venaisperfect1!',
        host: 'localhost',
        database: 'emptrac'
    },
);

pool.connect();