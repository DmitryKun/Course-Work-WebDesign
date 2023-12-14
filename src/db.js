const { Pool } = require('pg');

const pool = new Pool({
    user: 'ваш_пользователь',
    host: 'localhost:3000',
    database: 'shop',
    password: 'miru-mir',
    port: 5432,
});

module.exports = pool;
