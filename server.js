const { Pool } = require('pg');
const mainMenuOptions = require('./assets/js/questions/questions');

const pool = new Pool(
    {
        user: '',
        password: '',
        host: 'localhost',
        database: 'emptrac'
    },
);

pool.connect();
