const Knex = require('knex');
const config = require('config');

const knex = Knex({
    client: 'mysql',
    connection: config.get('Database.dbConfig'),
    pool: {
        afterCreate: (connection, callback) => {
            connection.query('SET names utf8mb4', (err) => callback(err, connection));
        },
    }
});


module.exports = knex;