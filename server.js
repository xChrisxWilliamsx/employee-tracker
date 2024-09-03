const { Pool } = require('pg');

// Connect to database
// Please update user and password
const pool = new Pool(
    {
      user: '',
      password: '',
      host: 'localhost',
      database: 'emptrac'
    },
    // run stage.index.js after connecting to db
    console.log(`Connected to the emptrac database.`)
);

pool.connect();
